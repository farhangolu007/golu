import { Button } from "@/components/ui/button";
import { Trophy, MessageCircle, Send, CheckCircle } from "lucide-react";

function App() {
  const handleTelegram1 = () => window.open('https://t.me/+V4lKjfSDh-iMvuwG', '_blank');
  const handleTelegram2 = () => window.open('https://t.me/+V7r67HedTo9iCOMn', '_blank');
  const handleWhatsApp = () => window.open('https://wa.me/917808594790', '_blank');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-900 to-blue-900">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 float-animation">
            Harivicky Cricket Prediction
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Get expert cricket predictions and analysis for all major tournaments and matches
          </p>

          {/* Stats Boxes */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mr-2 animate-pulse" />
                <h3 className="text-xl font-bold text-white">IPL 2024</h3>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">62/74</div>
              <p className="text-gray-300">Successful Predictions</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-blue-400 mr-2 animate-pulse" />
                <h3 className="text-xl font-bold text-white">BBL 2024</h3>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-1">39/44</div>
              <p className="text-gray-300">Successful Predictions</p>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center mb-3">
                <CheckCircle className="h-6 w-6 text-green-400 mr-2 animate-pulse" />
                <h3 className="text-xl font-bold text-white">PSL 2024</h3>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-1">27/34</div>
              <p className="text-gray-300">Successful Predictions</p>
            </div>
          </div>
        </div>

        {/* Buttons Container */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Telegram Button 1 */}
          <Button 
            size="lg"
            className="w-full animated-button bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-600 text-white text-xl p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={handleTelegram1}
          >
            <Send className="mr-3 h-16 md:h-8 w-8 animate-pulse" />
            Join Cricket Prediction Telegram Channel #1
          </Button>

          {/* Telegram Button 2 */}
          <Button 
            size="lg"
            className="w-full animated-button bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white text-xl p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={handleTelegram2}
          >
            <Send className="mr-3 h-16 md:h-8 w-8 animate-pulse" />
            Join Toss Prediction Telegram Channel #2
          </Button>

          {/* WhatsApp Button */}
          <Button 
            size="lg"
            className="w-full animated-button bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 hover:from-green-600 hover:via-emerald-600 hover:to-green-600 text-white text-xl p-8 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={handleWhatsApp}
          >
            <MessageCircle className="mr-3 h-8 w-8 animate-pulse" />
            Join WhatsApp Group
          </Button>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Expert Analysis</h3>
            <p className="text-gray-300">
              Get professional cricket predictions from experienced analysts
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Daily Updates</h3>
            <p className="text-gray-300">
              Receive regular updates and predictions for all matches
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
            <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-white mb-2">Community</h3>
            <p className="text-gray-300">
              Join our growing community of cricket enthusiasts
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2025 Harivicky Cricket Prediction. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;