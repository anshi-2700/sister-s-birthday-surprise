import { useState } from 'react';
import { Heart, Gift, Sparkles, Lock } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - you can change this
    if (password.toLowerCase() === 'didi' || password.toLowerCase() === 'sister' || password === '1234') {
      onLogin();
    } else {
      setError('Oops! Try again 💕');
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 30}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            size={20 + Math.random() * 30}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="w-full max-w-sm fade-in relative z-10">
        {/* Gift icon with animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full gradient-rose flex items-center justify-center shadow-lg heart-beat">
              <Gift className="w-12 h-12 text-primary-foreground" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-gold sparkle" />
          </div>
        </div>

        {/* Welcome text */}
        <div className="text-center mb-8">
          <h1 className="font-script text-5xl text-primary mb-2 text-shadow">
            Hey Didi! 💝
          </h1>
          <p className="text-muted-foreground text-lg">
            There's something special waiting for you...
          </p>
        </div>

        {/* Login form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`relative ${isShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}
            style={{
              animation: isShaking ? 'shake 0.5s ease-in-out' : undefined,
            }}
          >
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Lock className="w-5 h-5 text-muted-foreground" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter the magic word..."
              className="w-full py-4 pl-12 pr-4 rounded-2xl border-2 border-border bg-card/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all text-lg"
            />
          </div>

          {error && (
            <p className="text-center text-primary font-medium fade-in">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-4 rounded-2xl gradient-button text-primary-foreground font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>Open My Surprise</span>
            <Heart className="w-5 h-5" />
          </button>
        </form>

        {/* Hint */}
        <p className="text-center text-muted-foreground text-sm mt-6">
          Hint: What do I call you? 🤫
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
