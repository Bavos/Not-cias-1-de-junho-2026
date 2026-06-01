export type NewsSection = {
  topic: string;
  headline: string;
  bullets: string[];
  accent: string;
  emoji: string;
  start: number;
  duration: number;
};

export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1920;
export const FPS = 30;
export const DURATION_SECONDS = 35;
export const DURATION_FRAMES = FPS * DURATION_SECONDS;

export const colors = {
  background: '#080B12',
  alert: '#EA4335',
  blue: '#4285F4',
  yellow: '#FBBC05',
  green: '#34A853',
  white: '#FFFFFF',
};

export const newsSections: NewsSection[] = [
  {
    topic: 'Política Brasil',
    headline: 'PEC 6x1 chega ao Senado',
    bullets: [
      'Negociação intensa após aprovação na Câmara',
      'Transição e jornada flexível entram no debate',
    ],
    accent: colors.alert,
    emoji: '🏛️',
    start: 3,
    duration: 5,
  },
  {
    topic: 'Sucessão 2026',
    headline: 'Bastidores da direita expõem rachas',
    bullets: ['PSD descarta chapa Zema + Caiado'],
    accent: colors.yellow,
    emoji: '🗳️',
    start: 8,
    duration: 4,
  },
  {
    topic: 'Segurança RJ',
    headline: 'Escutas são encontradas no Palácio Guanabara',
    bullets: ['Investigação sigilosa apura origem dos dispositivos'],
    accent: colors.blue,
    emoji: '🚔',
    start: 12,
    duration: 4,
  },
  {
    topic: 'Economia e clima',
    headline: 'Agro se prepara para possível Super El Niño',
    bullets: ['Cemaden alerta Norte para chuvas, inundações e deslizamentos'],
    accent: colors.green,
    emoji: '🌧️',
    start: 16,
    duration: 5,
  },
  {
    topic: 'Colômbia',
    headline: 'Eleição presidencial vai ao 2º turno',
    bullets: [
      'Abelardo de la Espriella x Iván Cepeda',
      'Tensão institucional após contestação de Petro',
    ],
    accent: colors.yellow,
    emoji: '🇨🇴',
    start: 21,
    duration: 5,
  },
  {
    topic: 'Geopolítica',
    headline: 'EUA anunciam novos ataques no sul do Irã',
    bullets: ['Alvos: radares e bases de drones'],
    accent: colors.alert,
    emoji: '🌍',
    start: 26,
    duration: 4,
  },
  {
    topic: 'Esportes',
    headline: 'Começa o mês da Copa 2026',
    bullets: ['EUA, México e Canadá recebem o torneio'],
    accent: colors.blue,
    emoji: '⚽',
    start: 30,
    duration: 3,
  },
];

export const hashtags = [
  '#Noticias',
  '#Brasil',
  '#Mundo',
  '#Politica',
  '#Economia',
  '#Seguranca',
  '#Copa2026',
  '#TikTokNews',
];
