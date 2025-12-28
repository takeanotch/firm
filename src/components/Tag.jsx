export default function Tag({ tag, small = false }) {
  const sizeClasses = small ? 'px-2 py-1 text-xs' : 'px-3 py-1 text-sm';
  
  return (
    <span className={`inline-block bg-gray-100 text-gray-800 rounded-full font-medium ${sizeClasses} hover:bg-gray-200 transition-colors`}>
      #{tag}
    </span>
  );
}