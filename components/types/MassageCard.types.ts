export interface MassageCardProps {
  title: string;
  description: string;
  price: number;
  duration: number;
  customers: string;
  image: any; // 如果使用 require() 导入图片资源
  // 如果需要处理点击事件，可以添加：
  onSelect?: () => void;
} 