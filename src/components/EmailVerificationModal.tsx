import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface EmailVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email: string;
}

const EmailVerificationModal = ({ isOpen, onClose, email }: EmailVerificationModalProps) => {
  const [isResending, setIsResending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'verified'>('pending');

  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Check if email is verified periodically
  useEffect(() => {
    if (!isOpen || verificationStatus === 'verified') return;

    const checkVerification = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email_confirmed_at) {
        setVerificationStatus('verified');
        setTimeout(() => {
          onClose();
          window.location.href = '/profile';
        }, 2000);
      }
    };

    // Check immediately
    checkVerification();

    // Then check every 3 seconds
    const interval = setInterval(checkVerification, 3000);

    return () => clearInterval(interval);
  }, [isOpen, verificationStatus, onClose]);

  const handleResendEmail = async () => {
    setIsResending(true);
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email: email,
      });

      if (error) throw error;

      toast.success('Verification email sent! Please check your inbox.');
      setResendCooldown(60); // 60 second cooldown
    } catch (error: any) {
      toast.error(error.message || 'Failed to resend verification email');
    } finally {
      setIsResending(false);
    }
  };

  const handleContactSupport = () => {
    window.location.href = '/contact';
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm">
        {verificationStatus === 'pending' ? (
          <>
            <DialogHeader>
              <div className="mx-auto mb-3 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <DialogTitle className="text-center text-lg">
                Please verify your email address
              </DialogTitle>
              <DialogDescription className="text-center text-sm mt-2">
                You are just one step away from your goal! We have sent you an email at:
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-3 space-y-4">
              <div className="bg-gray-50 rounded-lg p-2 text-center">
                <p className="font-medium text-sm text-gray-900">{email}</p>
              </div>
              
              <p className="text-center text-xs text-gray-600">
                Please open it and click the verification link so we can make sure it's you.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <p className="font-medium text-amber-900 mb-1">
                      Can't find the email?
                    </p>
                    <ul className="text-amber-800 space-y-0.5 text-xs">
                      <li>• Check your spam or junk folder</li>
                      <li>• Make sure email is correct</li>
                      <li>• Wait a few minutes for it to arrive</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-center">
                 
                  <Button
                    onClick={handleResendEmail}
                    disabled={isResending || resendCooldown > 0}
                    variant="default"
                    size="sm"
                    className="w-full bg-logistics-blue hover:bg-logistics-blue-light"
                  >
                    {isResending ? (
                      <>
                        <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                        Sending...
                      </>
                    ) : resendCooldown > 0 ? (
                      `Resend in ${resendCooldown}s`
                    ) : (
                      'Send again'
                    )}
                  </Button>
                </div>

                <div className="text-center">
                 
                  <Button
                    onClick={handleContactSupport}
                    variant="outline"
                    size="sm"
                    className="w-full"
                  >
                    Contact support
                  </Button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="mx-auto mb-3 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <DialogTitle className="text-center text-lg">
                Email Verified Successfully!
              </DialogTitle>
              <DialogDescription className="text-center text-sm mt-2">
                Your email has been verified. Redirecting you to your profile...
              </DialogDescription>
            </DialogHeader>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EmailVerificationModal;