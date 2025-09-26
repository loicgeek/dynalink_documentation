export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'DynaLink - Superior Dynamic Links'
  },
  header: {
    title: 'DynaLink',
    to: '/',
    logo: {
      alt: 'DynaLink Logo',
      light: '/logo-icon.png',
      dark: '/logo-icon.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/dynalink/api',
      'target': '_blank',
      'aria-label': 'DynaLink on GitHub'
    }]
  },
  footer: {
    credits: `Built with DynaLink • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/dynalink',
      'target': '_blank',
      'aria-label': 'DynaLink Community Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://x.com/dynalink_app',
      'target': '_blank',
      'aria-label': 'DynaLink on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/dynalink',
      'target': '_blank',
      'aria-label': 'DynaLink on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/dynalink/docs/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/dynalink/api',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'API Documentation',
        to: 'https://docs.dynalink.app',
        target: '_blank'
      }, {
        icon: 'i-lucide-zap',
        label: 'Dashboard',
        to: 'https://admin.dynalink.app',
        target: '_blank'
      }]
    }
  }
})