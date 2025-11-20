import { useState } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard  from "./ProductCard";


const quizQuestions = [
  {
    id: 1,
    question: "What's your preferred scent intensity?",
    options: [
      { value: "light", label: "Light & Subtle", emoji: "🌸" },
      { value: "moderate", label: "Moderate", emoji: "✨" },
      { value: "strong", label: "Bold & Intense", emoji: "💪" },
    ]
  },
  {
    id: 2,
    question: "When do you plan to wear this fragrance?",
    options: [
      { value: "day", label: "Daytime / Work", emoji: "☀️" },
      { value: "evening", label: "Evening / Special Occasions", emoji: "🌙" },
      { value: "both", label: "All Day Long", emoji: "⏰" },
    ]
  },
  {
    id: 3,
    question: "What season do you prefer?",
    options: [
      { value: "spring", label: "Spring / Summer", emoji: "🌺" },
      { value: "fall", label: "Fall / Winter", emoji: "🍂" },
      { value: "year", label: "Year-Round", emoji: "🌍" },
    ]
  },
  {
    id: 4,
    question: "Which scent family appeals to you most?",
    options: [
      { value: "floral", label: "Floral & Fresh", emoji: "🌹" },
      { value: "woody", label: "Woody & Earthy", emoji: "🌲" },
      { value: "oriental", label: "Oriental & Spicy", emoji: "🔥" },
      { value: "citrus", label: "Citrus & Clean", emoji: "🍋" },
    ]
  },
  {
    id: 5,
    question: "What's your personality style?",
    options: [
      { value: "classic", label: "Classic & Elegant", emoji: "👔" },
      { value: "modern", label: "Modern & Trendy", emoji: "⚡" },
      { value: "romantic", label: "Romantic & Soft", emoji: "💕" },
      { value: "bold", label: "Bold & Daring", emoji: "🎯" },
    ]
  }
];

export function FragranceQuiz({ isOpen, onClose, featuredProducts, onCardClick, onQuickAdd }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  if (!isOpen) return null;

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.question === currentStep);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex] = { question: currentStep, answer };
    } else {
      newAnswers.push({ question: currentStep, answer });
    }
    
    setAnswers(newAnswers);

    if (currentStep < quizQuestions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      // Calculate recommendations
      calculateRecommendations(newAnswers);
    }
  };

  const calculateRecommendations = (quizAnswers) => {
    // Simple recommendation logic based on answers
    let recommended = [];

    // Get preference from answers
    const scentsPreference = quizAnswers.find(a => a.question === 3)?.answer;
    const intensityPreference = quizAnswers.find(a => a.question === 0)?.answer;

    // Filter featuredProducts based on preferences
    if (scentsPreference === 'floral') {
      recommended = featuredProducts.filter(p => 
        p.notes.some(note => ['Rose', 'Jasmine', 'Lily', 'Floral'].includes(note))
      );
    } else if (scentsPreference === 'woody') {
      recommended = featuredProducts.filter(p => 
        p.notes.some(note => ['Sandalwood', 'Cedar', 'Vetiver', 'Oakmoss'].includes(note))
      );
    } else if (scentsPreference === 'oriental') {
      recommended = featuredProducts.filter(p => 
        p.notes.some(note => ['Oud', 'Amber', 'Saffron', 'Incense', 'Patchouli'].includes(note))
      );
    } else if (scentsPreference === 'citrus') {
      recommended = featuredProducts.filter(p => 
        p.notes.some(note => ['Bergamot', 'Grapefruit', 'Citrus', 'Neroli'].includes(note))
      );
    }

    // If no specific matches, show popular featuredProducts
    if (recommended.length === 0) {
      recommended = featuredProducts.slice(0, 6);
    }

    // Limit to 6 recommendations
    setRecommendations(recommended.slice(0, 6));
    setShowResults(true);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResults(false);
    setRecommendations([]);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = quizQuestions[currentStep];
  const progress = ((currentStep + 1) / quizQuestions.length) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-[--color-light-gray] rounded-full transition-colors z-10"
        >
          <X size={24} />
        </button>

        {!showResults ? (
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="mb-2">Fragrance Quiz</h2>
              <p className="text-[--color-charcoal] opacity-70">
                Answer a few questions to find your perfect scent
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-[--color-charcoal] opacity-70 mb-2">
                <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-2 bg-[--color-light-gray] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[--color-gold] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-center mb-8">{currentQuestion.question}</h3>
              
              <div className="grid gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`p-6 border-2 rounded-lg text-left transition-all hover:border-[--color-gold] hover:shadow-lg ${
                      answers.find(a => a.question === currentStep)?.answer === option.value
                        ? 'border-[--color-gold] bg-[--color-gold] bg-opacity-10'
                        : 'border-[--color-light-gray]'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{option.emoji}</span>
                      <span className="text-lg">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className="flex items-center gap-2 px-6 py-3 border border-[--color-light-gray] rounded-full hover:bg-[--color-light-gray] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
                Back
              </button>
              
              <div className="flex gap-2">
                {quizQuestions.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStep 
                        ? 'bg-[--color-gold] w-8' 
                        : index < currentStep 
                          ? 'bg-[--color-gold]' 
                          : 'bg-[--color-light-gray]'
                    }`}
                  />
                ))}
              </div>

              <button
                disabled={!answers.find(a => a.question === currentStep)}
                className="flex items-center gap-2 px-6 py-3 bg-[--color-gold] hover:bg-[--color-copper] text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentStep === quizQuestions.length - 1 ? 'See Results' : 'Next'}
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8 md:p-12">
            {/* Results Header */}
            <div className="text-center mb-8">
              <h2 className="mb-2">Your Perfect Matches</h2>
              <p className="text-[--color-charcoal] opacity-70 max-w-2xl mx-auto">
                Based on your preferences, we've curated these fragrances just for you
              </p>
            </div>

            {/* Recommendations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onCardClick={onCardClick}
                  onQuickAdd={onQuickAdd}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleReset}
                className="px-8 py-3 border-2 border-[--color-gold] text-[--color-gold] hover:bg-[--color-gold] hover:text-white rounded-full transition-colors"
              >
                Retake Quiz
              </button>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[--color-gold] hover:bg-[--color-copper] text-white rounded-full transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
