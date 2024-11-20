import {
  CircleDot,
  PlayCircle,
  FileEdit,
  Brain,
  Clock,
  ArrowRightCircle,
  Trash2,
  Crown,
  HandMetal,
  XCircle,
  Bomb,
  Share2,
  Rocket,
} from 'lucide-react';

const rules = [
  {
    text: 'There are three states of being: Not knowing, action and completion.',
    icon: <CircleDot size={32} />,
  },
  {
    text: 'Accept that everything is a draft. It helps to get it done.',
    icon: <PlayCircle size={32} />,
  },
  {
    text: 'There is no editing stage.',
    icon: <FileEdit size={32} />,
  },
  {
    text: "Pretending you know what you're doing is almost the same as knowing.",
    icon: <Brain size={32} />,
  },
  {
    text: 'Banish procrastination. If you wait more than a week, abandon it.',
    icon: <Clock size={32} />,
  },
  {
    text: 'The point of being done is not to finish but to get other things done.',
    icon: <ArrowRightCircle size={32} />,
  },
  {
    text: "Once you're done you can throw it away.",
    icon: <Trash2 size={32} />,
  },
  {
    text: "Laugh at perfection. It's boring and keeps you from being done.",
    icon: <Crown size={32} />,
  },
  {
    text: 'People without dirty hands are wrong. Doing something makes you right.',
    icon: <HandMetal size={32} />,
  },
  {
    text: 'Failure counts as done. So do mistakes.',
    icon: <XCircle size={32} />,
  },
  {
    text: 'Destruction is a variant of done.',
    icon: <Bomb size={32} />,
  },
  {
    text: 'If you have an idea, publish it on the internet as a ghost of done.',
    icon: <Share2 size={32} />,
  },
  {
    text: 'Done is the engine of more.',
    icon: <Rocket size={32} />,
  },
];

const colors = [
  '#009688',
  '#4CAF50',
  '#FFC107',
  '#FF5722',
  '#2196F3',
  '#9C27B0',
];

const DoneManifesto = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Orbitron:wght@700&family=Space+Mono&display=swap"
      />
      <h1
        className="text-5xl font-bold text-white mb-12 text-center"
        style={{ fontFamily: 'Orbitron, sans-serif' }}>
        Cult of Done
      </h1>
      <div className="max-w-3xl mx-auto grid gap-6">
        {rules.map((rule, index) => (
          <div
            key={index}
            className="flex items-center gap-6 bg-black bg-opacity-50 p-6 rounded-lg">
            <div style={{ color: colors[index % colors.length] }}>
              {rule.icon}
            </div>
            <p
              className="text-white text-xl"
              style={{ fontFamily: 'Space Mono, monospace' }}>
              {index + 1}. {rule.text}
            </p>
          </div>
        ))}
      </div>
      <div
        className="text-center mt-12 text-gray-400"
        style={{ fontFamily: 'Space Mono, monospace' }}>
        <a
          href="https://manifestos.mombartz.com/the-cult-of-done/"
          className="text-sm hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer">
          Thanks to Bre Pettis & Kio Stark
        </a>
      </div>
    </div>
  );
};

export default DoneManifesto;
