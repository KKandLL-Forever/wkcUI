module.exports = {
  '/ui/':[
    'install',
    'get-start',
    {
      title: '组件',
      collapsable: false,
      children: [
        {
          title: 'Basic',
          collapsable: false,
          children: [
            '/ui/components/Basic/Button/',
            '/ui/components/Basic/Layout/',
          ]
        },
        {
          title: 'Form',
          collapsable: false,
          children: [
            '/ui/components/Form/Input/'
          ]
        },
        {
          title: 'Navigation',
          collapsable: false,
          children: [
            '/ui/components/Navigation/NavMenu/',
            '/ui/components/Navigation/Tabs/'
          ]
        },
        {
          title: 'Feedback',
          collapsable: false,
          children: [
            '/ui/components/Feedback/Message/'
          ]
        },
      
      ]
    },
  ],
  '/records/': [
    '',
    'button',
    'navMenu',
    'input',
  ],
  '/plan/': ['']
}
