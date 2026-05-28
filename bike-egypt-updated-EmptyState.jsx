import { Filter, Search, ShoppingCart, Package } from 'lucide-react'

function EmptyState({ type = 'general', searchTerm = '', onReset }) {
  const config = {
    shops: {
      icon: Filter,
      title: 'No Shops Found',
      description: searchTerm 
        ? `No shops match "${searchTerm}". Try different keywords or filters.`
        : 'No shops match your current filters. Try adjusting your search criteria.',
      actionText: 'Clear Filters',
      iconColor: 'text-primary-400'
    },
    marketplace: {
      icon: ShoppingCart,
      title: 'No Bikes Available',
      description: searchTerm
        ? `No bikes match "${searchTerm}". Try different search terms or filters.`
        : 'No bikes match your current filters. Check back later or adjust your criteria.',
      actionText: 'Clear Filters',
      iconColor: 'text-accent-400'
    },
    general: {
      icon: Package,
      title: 'Nothing Here',
      description: 'No items found matching your criteria.',
      actionText: 'Reset',
      iconColor: 'text-slate-400'
    }
  }

  const { icon: Icon, title, description, actionText, iconColor } = config[type] || config.general

  return (
    <div className="text-center py-16 md:py-24 animate-fade-in">
      <div className="glass max-w-md mx-auto p-12 rounded-2xl">
        <Icon className={`h-20 w-20 ${iconColor} mx-auto mb-6 opacity-50`} />
        <h3 className="text-2xl font-display font-bold text-slate-100 mb-3">
          {title}
        </h3>
        <p className="text-slate-400 mb-8">
          {description}
        </p>
        {onReset && (
          <button
            onClick={onReset}
            className="btn btn-primary mx-auto"
          >
            {actionText}
          </button>
        )}
      </div>
    </div>
  )
}

export default EmptyState
