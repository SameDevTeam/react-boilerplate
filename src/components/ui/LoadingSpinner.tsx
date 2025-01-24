export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-screen bg-background">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-foreground" />
    </div>
  )
} 