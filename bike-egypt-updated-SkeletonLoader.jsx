function SkeletonLoader({ type = 'card', count = 6 }) {
  if (type === 'card') {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="glass p-6 rounded-2xl animate-pulse"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image skeleton */}
            <div className="h-48 bg-slate-700/30 rounded-xl mb-6"></div>
            
            {/* Title skeleton */}
            <div className="h-6 bg-slate-700/30 rounded-lg mb-4 w-3/4"></div>
            
            {/* Text lines skeleton */}
            <div className="space-y-3 mb-6">
              <div className="h-4 bg-slate-700/30 rounded w-full"></div>
              <div className="h-4 bg-slate-700/30 rounded w-5/6"></div>
              <div className="h-4 bg-slate-700/30 rounded w-4/6"></div>
            </div>
            
            {/* Button skeletons */}
            <div className="flex gap-3">
              <div className="h-10 bg-slate-700/30 rounded-lg flex-1"></div>
              <div className="h-10 bg-slate-700/30 rounded-lg flex-1"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === 'list') {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="glass p-6 rounded-xl flex gap-4 animate-pulse"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="h-20 w-20 bg-slate-700/30 rounded-lg flex-shrink-0"></div>
            <div className="flex-1 space-y-3">
              <div className="h-5 bg-slate-700/30 rounded w-2/3"></div>
              <div className="h-4 bg-slate-700/30 rounded w-full"></div>
              <div className="h-4 bg-slate-700/30 rounded w-4/5"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return null
}

export default SkeletonLoader
