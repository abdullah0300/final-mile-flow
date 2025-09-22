// Create new file: src/pages/admin/BlogEditor.tsx

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Save, ArrowLeft, Upload } from 'lucide-react';
import { toast } from 'sonner';

const BlogEditor = () => {
  const { id } = useParams();
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'Industry News',
    tags: '',
    featured_image: '',
    published: false
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/auth');
      return;
    }
    
    fetchCategories();
    
    if (id) {
      fetchPost();
    }
  }, [id, user, isAdmin]);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');

    if (error) {
      // Use default categories if table doesn't exist
      setCategories([
        { id: '1', name: 'Industry News' },
        { id: '2', name: 'Tips & Guides' },
        { id: '3', name: 'Company Updates' },
        { id: '4', name: 'Case Studies' }
      ]);
    } else {
      setCategories(data || []);
      // Set first category as default if available
      if (data && data.length > 0 && !formData.category) {
        setFormData(prev => ({ ...prev, category: data[0].name }));
      }
    }
  };

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      toast.error('Error fetching post');
      navigate('/admin/blog');
    } else {
      setFormData({
        ...data,
        tags: data.tags ? data.tags.join(', ') : ''
      });
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    // Fix: Remove duplicate 'blog-images' from path
    const filePath = `${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('blog-images')
      .upload(filePath, file);

    if (uploadError) {
      console.error('Upload error:', uploadError);
      toast.error('Error uploading image: ' + uploadError.message);
    } else {
      const { data } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);
      
      setFormData({ ...formData, featured_image: data.publicUrl });
      toast.success('Image uploaded');
    }
    setUploading(false);
  };

  const handleSubmit = async (publish: boolean = false) => {
    if (!formData.title || !formData.content) {
      toast.error('Title and content are required');
      return;
    }

    setLoading(true);
    
    const postData = {
      ...formData,
      slug: formData.slug || generateSlug(formData.title),
      tags: formData.tags ? formData.tags.split(',').map(t => t.trim()) : [],
      published: publish,
      published_at: publish ? new Date().toISOString() : null,
      author_id: user.id,
      author_name: user.email?.split('@')[0] || 'Admin',
      updated_at: new Date().toISOString()
    };

    let error;
    if (id) {
      ({ error } = await supabase
        .from('blog_posts')
        .update(postData)
        .eq('id', id));
    } else {
      ({ error } = await supabase
        .from('blog_posts')
        .insert([postData]));
    }

    if (error) {
      toast.error('Error saving post');
    } else {
      toast.success(publish ? 'Post published!' : 'Post saved as draft');
      navigate('/admin/blog');
    }
    setLoading(false);
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              {id ? 'Edit Post' : 'Create New Post'}
            </h1>
            <Button
              variant="outline"
              onClick={() => navigate('/admin/blog')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="Leave empty to auto-generate"
                />
                <p className="text-xs text-gray-500 mt-1">
                  URL: /blog/{formData.slug || generateSlug(formData.title)}
                </p>
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Brief description of the post"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="content">Content *</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your blog post content here..."
                  rows={15}
                  className="font-mono"
                />
                <p className="text-xs text-gray-500 mt-1">
                  You can use HTML tags for formatting
                </p>
              </div>

              <div>
                <Label htmlFor="category">Category</Label>
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.name}>
                        {cat.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  placeholder="logistics, delivery, tips"
                />
              </div>

              <div>
                <Label htmlFor="image">Featured Image</Label>
                <div className="flex gap-4 items-center">
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                  />
                  {uploading && <span className="text-sm">Uploading...</span>}
                </div>
                {formData.featured_image && (
                  <img
                    src={formData.featured_image}
                    alt="Featured"
                    className="mt-2 h-32 object-cover rounded"
                  />
                )}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={() => handleSubmit(false)}
                  disabled={loading}
                  variant="outline"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save as Draft
                </Button>
                <Button
                  onClick={() => handleSubmit(true)}
                  disabled={loading}
                  className="bg-logistics-blue hover:bg-logistics-blue-light"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Publish Post
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogEditor;