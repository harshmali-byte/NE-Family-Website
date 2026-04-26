import ContentPage from './ContentPage'

const privacySections = [
  {
    title: 'Privacy Policy',
    paragraphs: [
      'We are committed to protecting and respecting your privacy. This Privacy Policy (this “Policy”) describes how we collect, use and disclose personal information of users of our services, including our Website (our “Site”). Please read this Privacy Policy carefully.',
      'By using our Site, you agree to the terms of this Policy. If you do not agree with the terms of this Policy, do not use our Site. Your use of our Site for the limited and exclusive purpose of reviewing this Policy does not constitute your agreement to this Policy unless you make further use of our Site. This Policy may be updated from time to time.',
      'This Policy describes:',
    ],
    items: [
      'The personal information we collect',
      'How we collect such information',
      'How such information is used',
      'How such information is shared',
      'How you can contact us',
    ],
  },
  {
    title: 'INFORMATION WE COLLECT',
    paragraphs: [
      'We and our third-party service providers may collect and process the following types of personal information about you:',
    ],
    items: [
      'Name',
      'Phone number',
      'Email address',
      'Social network profile information',
      'Information we collect when you use our Site, such as your domain name, Internet protocol (IP) address, mobile device model, Internet service provider, Site access times, websites that referred you to us and web pages within our Site that you visit',
      'Information you communicate to us through our Site, our social media pages or through other means',
    ],
  },
  {
    title: 'HOW WE COLLECT INFORMATION',
    paragraphs: [
      'We and our third-party service providers may collect personal information as follows:',
    ],
    items: [
      'We may collect information you provide when you use our Site, including when you fill in forms on our Site, subscribe to any of our services, complete a survey on our Site, post material to our Site or download content from our Site.',
      'We may collect information you provide when you contact us by phone, email, text message or messaging application on social media.',
      'We may collect social network profile information that you have made publicly available through your social network account settings if you choose to access our social media pages or connect or otherwise link to our Site with your own social media page. We also may collect customers’ and public feedback on social media.',
      'Our Site may use cookies, tracking pixels and other similar technologies to collect information about visitors to our Site. A cookie is a small amount of data that is sent to your browser from a Web server and stored on your computer’s hard drive. A tracking pixel is a graphic that is loaded when a user visits a website or opens an email and is used to track certain user activities.',
    ],
  },
  {
    title: 'HOW WE USE THE INFORMATION COLLECTED',
    paragraphs: [
      'We and our third-party service providers may use information collected to:',
    ],
    items: [
      'Operate, maintain and improve our Site.',
      'Conduct analytics to help us better understand our customers and improve our products and services.',
      'Process and manage purchases made by you',
      'Respond to your customer service inquiries, post your comments related to our products and services on our social network pages and take other actions in response to your questions, comments or Site activity.',
      'Communicate with you about special offers, services and promotions that may be of interest to you.',
      'Help us develop, customize, deliver, support and improve our services',
      'Allow you to participate in interactive features of our service when you choose to do so.',
      'Notify you about changes to our service.',
      'Conduct market research in order to serve targeted advertisements.',
    ],
  },
  {
    title: 'Advertising and Analytics',
    paragraphs: [
      'We and our third-party service providers may use the information collected from cookies, tracking pixels and other similar technologies to target advertising to you personally, through online and offline methods including email, display media, video media and direct mail.',
      'When you log in to or visit our Site, your IP address may be combined with other de-identified data (such as a hashed, non-readable email or postal address) and such information may be used by third-party service providers to send ads and materials to you based on your preferences, interests and attributes. Such information may also be combined with aggregate information collected from other users or sources and used by third-party service providers to conduct market research and to better target their advertising. Although you may not opt out of receiving online advertisements generally, you may find out how to opt out of having your online behavior collected by third-party advertisers for advertising purposes. You may visit each ad network’s website individually to opt-out and review their privacy policies, or you may visit the Digital Advertising Alliance’s opt-out website at https://youradchoices.com/ or the Network Advertising Initiative’s opt-out website at http://networkadvertising.org/.',
    ],
  },
  {
    title: 'HOW WE DISCLOSE THE INFORMATION COLLECTED',
    paragraphs: [
      'We and our third-party service providers may share your personal information under the following circumstances:',
    ],
    items: [
      'We may share your personal information with any member of our group of companies (our subsidiaries and our ultimate parent company and its subsidiaries).',
      'We may share your personal information with companies that provide services to us, such as credit card processors, website hosts, email vendors and other companies that help us provide our services or our Site.',
      'We may disclose your personal information in response to legal process, when required to comply with laws, to combat fraudulent or criminal activity, to enforce our agreements, corporate policies and the terms of use of our Site, and to protect the rights, property and safety of our business, our employees, agents, customers or others.',
      'We may share technical data that we collect about your browsing habits and your device (such as data collected via our cookies, tracking pixels and similar technologies, as discussed above) with third-party service providers and other advertising companies. This enables them and us to better target ads to you and other consumers.',
    ],
  },
  {
    title: 'HOW TO CONTACT US',
    paragraphs: [
      'If you have any questions, comments or requests regarding this Policy, please contact us using the contact information shown on our Site.',
      'Email: info@nefamily4me.com',
      'Phone: 5086722997',
    ],
  },
]

const policyActions = [
  { label: 'Pay My Bill', to: '/pay-my-bill' },
  { label: 'Policy Change', to: '/policy-change' },
  { label: 'Certificate', to: '/certificate' },
  { label: 'File A Claim', to: '/file-a-claim' },
]

function PrivacyTermsPage() {
  return (
    <ContentPage
      eyebrow="Privacy policy & Terms of Use"
      title="Privacy Policy"
      intro="We are committed to protecting and respecting your privacy."
      sections={privacySections}
      actions={policyActions}
    />
  )
}

export default PrivacyTermsPage
