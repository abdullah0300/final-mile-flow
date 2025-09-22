// Create new file: src/pages/admin/BlogAdmin.tsx

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plus, Edit, Trash2, Eye, Search, Tag, X } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const BlogAdmin = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Category management state
  const [categories, setCategories] = useState<any[]>([]);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/auth');
      return;
    }
    fetchPosts();
    fetchCategories();
  }, [user, isAdmin]);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast.error('Error fetching posts');
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      console.error('Categories table not found, using defaults');
      // Use default categories if table doesn't exist
      setCategories([
        { id: '1', name: 'Industry News' },
        { id: '2', name: 'Tips & Guides' },
        { id: '3', name: 'Company Updates' },
        { id: '4', name: 'Case Studies' }
      ]);
    } else {
      setCategories(data || []);
    }
  };

  const addCategory = async () => {
    if (!newCategory) {
      toast.error('Category name is required');
      return;
    }

    const slug = newCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    const { error } = await supabase
      .from('blog_categories')
      .insert([{
        name: newCategory,
        slug: slug,
        description: categoryDescription
      }]);

    if (error) {
      if (error.message.includes('unique')) {
        toast.error('Category already exists');
      } else {
        // If table doesn't exist, just add to local state
        setCategories([...categories, { id: Date.now().toString(), name: newCategory }]);
        toast.success('Category added (local only - create database table for persistence)');
      }
    } else {
      toast.success('Category added');
      fetchCategories();
    }
    
    setNewCategory('');
    setCategoryDescription('');
    setShowCategoryForm(false);
  };

  const deleteCategory = async (id: string, name: string) => {
    if (!confirm(`Delete category "${name}"? Posts with this category will need to be updated.`)) return;

    const { error } = await supabase
      .from('blog_categories')
      .delete()
      .eq('id', id);

    if (error) {
      // If database fails, remove from local state
      setCategories(categories.filter(c => c.id !== id));
      toast.success('Category removed (local only)');
    } else {
      toast.success('Category deleted');
      fetchCategories();
    }
  };

  const togglePublished = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ 
        published: !currentStatus,
        published_at: !currentStatus ? new Date().toISOString() : null
      })
      .eq('id', id);

    if (error) {
      toast.error('Error updating post');
    } else {
      toast.success(currentStatus ? 'Post unpublished' : 'Post published');
      fetchPosts();
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast.error('Error deleting post');
    } else {
      toast.success('Post deleted');
      fetchPosts();
    }
  };

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p>You don't have permission to access this page.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Blog Admin</h1>
          
          {/* Categories Section */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold flex items-center">
                <Tag className="w-5 h-5 mr-2" />
                Categories
              </h3>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setShowCategoryForm(!showCategoryForm)}
              >
                {showCategoryForm ? 'Cancel' : 'Add Category'}
              </Button>
            </div>
            
            {showCategoryForm && (
              <div className="flex gap-2 mb-3">
                <Input
                  placeholder="Category name"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="flex-1"
                />
                <Input
                  placeholder="Description (optional)"
                  value={categoryDescription}
                  onChange={(e) => setCategoryDescription(e.target.value)}
                  className="flex-1"
                />
                <Button onClick={addCategory} size="sm">
                  Add
                </Button>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <div key={cat.id} className="flex items-center gap-1 bg-white px-3 py-1 rounded-full border">
                  <span className="text-sm">{cat.name}</span>
                  {categories.length > 1 && (
                    <button
                      onClick={() => deleteCategory(cat.id, cat.name)}
                      className="ml-1 text-red-500 hover:text-red-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Search and New Post Button */}
          <div className="flex justify-between items-center">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              onClick={() => navigate('/admin/blog/new')}
              className="bg-logistics-blue hover:bg-logistics-blue-light"
            >
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </div>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPosts.map((post) => (
                  <TableRow key={post.id}>
                    <TableCell className="font-medium">
                      {post.title}
                    </TableCell>
                    <TableCell>{post.category}</TableCell>
                    <TableCell>
                      <Badge variant={post.published ? 'default' : 'secondary'}>
                        {post.published ? 'Published' : 'Draft'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {format(new Date(post.created_at), 'MMM d, yyyy')}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => navigate(`/blog/${post.slug}`)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => togglePublished(post.id, post.published)}
                        >
                          {post.published ? 'Unpublish' : 'Publish'}
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => deletePost(post.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BlogAdmin;