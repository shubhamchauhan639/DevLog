import { SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="text-sm font-medium text-gray-900">DevLog</span>
        </div>

        {/* Clerk pre-built sign-in */}
        <SignIn
          appearance={{
            variables: {
              colorPrimary: '#6366f1',
              colorBackground: '#ffffff',
              colorText: '#111827',
              colorTextSecondary: '#4b5563',
              colorInputBackground: '#f9fafb',
              colorInputText: '#111827',
              borderRadius: '0.75rem',
              fontFamily: 'var(--font-geist-sans), sans-serif',
            },
            elements: {
              card: 'bg-white border border-gray-200 shadow-sm',
              headerTitle: 'text-gray-900',
              headerSubtitle: 'text-gray-500',
              socialButtonsBlockButton:
                'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 transition-colors',
              dividerLine: 'bg-gray-200',
              dividerText: 'text-gray-400',
              formFieldLabel: 'text-gray-600 text-xs',
              formFieldInput:
                'bg-gray-50 border-gray-200 text-gray-900 focus:border-indigo-500 rounded-lg',
              formButtonPrimary:
                'bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition-colors',
              footerActionLink: 'text-indigo-600 hover:text-indigo-500',
              identityPreviewText: 'text-gray-900',
              identityPreviewEditButtonIcon: 'text-gray-500',
            },
          }}
        />
      </div>
    </main>
  )
}
