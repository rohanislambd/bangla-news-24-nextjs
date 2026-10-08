
const LoadingPage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Breadcrumb Skeleton */}
        <div className="mb-6 flex gap-2">
          <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
          <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Source + Date */}
        <div className="mb-5 flex gap-3">
          <div className="h-7 w-24 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-32 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Title */}
        <div className="space-y-3">
          <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200" />
          <div className="h-10 w-4/5 animate-pulse rounded-lg bg-gray-200" />
        </div>

        {/* Tags */}
        <div className="mt-5 flex gap-2">
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-24 animate-pulse rounded-full bg-gray-200" />
          <div className="h-6 w-20 animate-pulse rounded-full bg-gray-200" />
        </div>

        {/* Featured Image */}
        <div className="mt-8 aspect-video w-full animate-pulse rounded-2xl bg-gray-200" />

        {/* Content */}
        <div className="mt-10 space-y-5">
          <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-11/12 animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-full animate-pulse rounded bg-gray-200" />
          <div className="h-5 w-4/5 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </main>
  );
};

export default LoadingPage;
