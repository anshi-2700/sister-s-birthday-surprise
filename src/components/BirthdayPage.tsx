import { Heart, Cake, Star, Sparkles, PartyPopper } from 'lucide-react';
import FlipCard from './FlipCard';

const quotes = [
  "A sister is both your mirror – and your opposite. 💖",
  "Sisters are different flowers from the same garden. 🌸",
  "Having a sister means you always have a backup. 👯‍♀️",
  "Sisters make the best friends in the world. 💕",
  "Side by side or miles apart, sisters are connected by the heart. ❤️",
];

const reasons = [
  "You always believed in me, even when I didn't believe in myself",
  "Your laughter is the most beautiful sound in the world",
  "You taught me what unconditional love really means",
  "You're my first and forever best friend",
  "You always know how to make me smile",
  "Your hugs feel like home",
  "You stand up for me no matter what",
  "You share your food with me (sometimes! 😄)",
  "You give the best advice ever",
  "You're patient with all my silly questions",
  "You celebrate my wins like they're your own",
  "You never judge me for my mistakes",
  "You're the keeper of all my secrets",
  "You make ordinary moments extraordinary",
  "You inspire me to be a better person every day",
  "You have the kindest heart I know",
  "You're strong when I need you to be strong",
  "You make our home feel complete",
  "You always save the last piece of chocolate for me",
  "You're my personal therapist, stylist, and cheerleader",
  "You forgive me even when I'm annoying",
  "You're not just my sister, you're my hero",
  "Because with you, every day feels like a celebration! 🎉",
];

// Placeholder images - replace with actual photos
const images = Array.from({ length: 23 }, (_, i) => 
  `https://images.unsplash.com/photo-${[
    '1529333166437-7750a6dd5a70',
    '1516589178581-6cd7833ae3b2',
    '1511632765486-a01980e01a18',
    '1543332164-6e82f355badc',
    '1506905925346-21bda4d32df4',
    '1522849696284-83c0ec6a0f5e',
    '1517841905240-472988babdf9',
    '1539571696357-5a69c17a67c6',
    '1523301343968-6a6ebf63c672',
    '1492138786289-d35ea832da43',
    '1505455184862-554165e5f6ba',
    '1516156008625-3a9d6067fab5',
    '1519741497674-611481863552',
    '1507003211169-0a1dd7228f2d',
    '1524504388940-b1c1722653e1',
    '1530103862676-de8c9debad1d',
    '1517841905240-472988babdf9',
    '1528980917907-8df7f48f6f2a',
    '1502920514313-52581002a659',
    '1524601500432-1e1a4c71d692',
    '1509099836639-18ba1795216d',
    '1537511446984-935f663eb1f4',
    '1522673607200-164d1b6ce486',
  ][i % 23]}?w=400&h=500&fit=crop`
);

const BirthdayPage = () => {
  return (
    <div className="min-h-screen gradient-bg pb-10">
      {/* Hero Section */}
      <section className="relative px-4 pt-10 pb-8 overflow-hidden">
        {/* Floating decorations */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-primary/15 float"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
              size={16 + Math.random() * 20}
            />
          ))}
        </div>

        <div className="text-center relative z-10 fade-in">
          {/* Cake icon */}
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-full gradient-rose flex items-center justify-center shadow-lg heart-beat">
              <Cake className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>

          <h1 className="font-script text-5xl sm:text-6xl text-primary mb-3 text-shadow">
            Happy Birthday!
          </h1>
          <h2 className="font-script text-3xl sm:text-4xl text-coral mb-4">
            My Dearest Didi 💖
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 text-gold sparkle" />
            <PartyPopper className="w-6 h-6 text-primary" />
            <Star className="w-5 h-5 text-gold sparkle" style={{ animationDelay: '0.5s' }} />
          </div>

          <p className="text-muted-foreground text-lg max-w-xs mx-auto leading-relaxed">
            On your special day, I want you to know just how much you mean to me...
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="px-4 py-6">
        <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="w-72 flex-shrink-0 p-5 rounded-2xl gradient-card border border-border/50 shadow-md fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Sparkles className="w-5 h-5 text-gold mb-3" />
                <p className="text-foreground font-medium italic leading-relaxed">
                  "{quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 23 Reasons Section */}
      <section className="px-4 py-6">
        <div className="text-center mb-6">
          <h3 className="font-script text-4xl text-primary mb-2">
            23 Reasons
          </h3>
          <p className="text-muted-foreground">
            Why you're the best sister ever ✨
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">
            Tap each card to see a memory 💕
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <FlipCard
                number={index + 1}
                reason={reason}
                imageUrl={images[index]}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Final Message */}
      <section className="px-4 py-8 text-center">
        <div className="gradient-card rounded-3xl p-6 shadow-lg border border-border/50 fade-in">
          <Heart className="w-12 h-12 text-primary mx-auto mb-4 heart-beat" />
          <h3 className="font-script text-3xl text-primary mb-3">
            Thank You Didi!
          </h3>
          <p className="text-foreground leading-relaxed mb-4">
            For being my protector, my guide, and my forever friend. 
            May this year bring you endless happiness, love, and all 
            your heart desires! 🎂✨
          </p>
          <p className="font-script text-2xl text-coral">
            Love you always! 💝
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-muted-foreground text-sm">
        <p>Made with 💖 just for you</p>
      </footer>
    </div>
  );
};

export default BirthdayPage;
