export default function PrivacyContent() {
  return (
    <>
      <p className="italic">
        EtsyCraft — AI-Powered Tools for Etsy Sellers (including EtsyCraft AI and EtsyCraft Social Engine)
      </p>
      <p><strong>Effective Date:</strong> March 2026</p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy describes how VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("we," "us," or "our") collects, uses, stores, and protects information when you use the EtsyCraft Chrome browser extensions — EtsyCraft AI (SEO Listing Generator) and EtsyCraft Social Engine (Social Media Content &amp; Publishing) — collectively referred to as "the Extensions." We are committed to protecting your privacy and handling your data transparently.
      </p>
      <p>
        By installing and using any of the Extensions, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please uninstall the Extensions.
      </p>

      <h2>2. Data Controller</h2>
      <p>
        VENTOS ARQUEÁVEIS UNIPESSOAL LDA<br />
        Registered in Portugal<br />
        Email: <a href="mailto:support@craftpilotapp.com" className="text-primary hover:underline">support@craftpilotapp.com</a><br />
        Website: <a href="https://craftpilotapp.com" className="text-primary hover:underline">https://craftpilotapp.com</a>
      </p>
      <p>
        Supervisory authority: CNPD — Comissão Nacional de Proteção de Dados (<a href="https://www.cnpd.pt" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.cnpd.pt</a>)
      </p>

      <h2>3. Data We Collect</h2>

      <h3>3.1 Data You Provide Directly</h3>
      <ul>
        <li><strong>API Keys:</strong> Your OpenAI (sk-...) and/or Anthropic (sk-ant-...) keys — to send generation requests to AI providers on your behalf</li>
        <li><strong>Content Notes:</strong> Additional notes field text entered by you — to customize AI-generated content</li>
        <li><strong>Settings:</strong> AI provider, model, language, tone preferences — to configure Extension behavior per your preferences</li>
        <li><strong>Brand Voice Settings (Social Engine):</strong> Custom tone and style preferences — to maintain consistent social media content</li>
        <li><strong>Payment Data:</strong> Email address (collected by ExtensionPay/Stripe only) — for subscription management and payment processing</li>
      </ul>

      <h3>3.2 Data Extracted from Etsy Pages</h3>
      <p>When you click "Generate" on an Etsy listing page, the Extensions extract the following data from the currently open page:</p>
      <ul>
        <li>Listing title, description, existing tags, and category</li>
        <li>URLs of listing photos (up to 3 images)</li>
        <li>This extraction occurs only on Etsy pages and only upon your explicit action</li>
      </ul>

      <h3>3.3 Data Collected Automatically</h3>
      <p>The Extensions collect minimal automatically-generated data:</p>
      <ul>
        <li>Monthly generation counter (a number stored locally to enforce plan limits)</li>
        <li>We do <strong>NOT</strong> collect: browsing history, IP addresses, device fingerprints, analytics data, cookies, or any personally identifiable information beyond what is listed above</li>
      </ul>

      <h2>4. Data Storage</h2>

      <h3>4.1 Local Storage Only</h3>
      <p>All user data is stored exclusively on your device in the Chrome browser's isolated extension storage (chrome.storage.local). We do not operate any servers that store your data.</p>

      <h3>4.2 API Key Security</h3>
      <p>Your API keys are stored in plain text within chrome.storage.local. While this storage is isolated from other extensions and websites, please be aware that:</p>
      <ul>
        <li>Keys are accessible via Chrome DevTools on your device</li>
        <li>Programs with access to your Chrome profile directory may access them</li>
        <li>We recommend using API keys with usage limits set on your OpenAI/Anthropic dashboard</li>
      </ul>

      <h3>4.3 Local Storage and the ePrivacy Directive</h3>
      <p>The Extensions use chrome.storage.local to store information on your terminal equipment within the meaning of Article 5(3) of the ePrivacy Directive (2002/58/EC). Storage of your settings and API keys locally is strictly necessary for providing the functionality you have explicitly requested.</p>

      <h2>5. Data Sharing with Third Parties</h2>
      <p>The Extensions transmit data to the following third-party services:</p>

      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 border-b border-border font-semibold">Service</th>
              <th className="text-left p-3 border-b border-border font-semibold">Data Transmitted</th>
              <th className="text-left p-3 border-b border-border font-semibold">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3">OpenAI (api.openai.com)</td>
              <td className="p-3">Listing data as prompt text; your API key in Authorization header</td>
              <td className="p-3">AI content generation (BYOK model)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Anthropic (api.anthropic.com)</td>
              <td className="p-3">Listing data as prompt text; your API key in x-api-key header</td>
              <td className="p-3">AI content generation (BYOK model)</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Instagram API (Social Engine Pro+)</td>
              <td className="p-3">Post content and images</td>
              <td className="p-3">Direct publishing to Instagram</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3">Pinterest API (Social Engine Pro/Pro+)</td>
              <td className="p-3">Pin content, descriptions, and images</td>
              <td className="p-3">Direct publishing to Pinterest</td>
            </tr>
            <tr>
              <td className="p-3">ExtensionPay / Stripe</td>
              <td className="p-3">Email address, subscription status, plan info</td>
              <td className="p-3">Payment processing</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Important:</strong> All API calls go directly from your browser to the respective service. We do not proxy, intercept, or store any data transmitted to these services. We do not sell, rent, or trade your personal data to any third parties.</p>

      <h3>5.1 Chrome Web Store Limited Use Disclosure</h3>
      <p>The Extensions' use of information received from Chrome APIs adheres to the Chrome Web Store User Data Policy, including the Limited Use requirements.</p>

      <h2>6. Analytics and Tracking</h2>
      <p>The Extensions do not include any analytics or tracking code. We do not use Google Analytics, Mixpanel, Amplitude, or any similar services within the Extensions. No usage events, page views, or behavioral data are collected or transmitted by the Extensions.</p>
      <p><em>Note: Our website (craftpilotapp.com) may use analytics cookies with your consent — see our Cookie Policy for details.</em></p>

      <h2>7. BYOK (Bring Your Own Key) Model</h2>
      <p>The Extensions operate on a BYOK model, which means:</p>
      <ul>
        <li>You provide your own API keys from OpenAI and/or Anthropic</li>
        <li>API calls are made directly from your browser to the AI provider</li>
        <li>You are responsible for your API usage and associated costs</li>
        <li>Your data is subject to the privacy policies of OpenAI and Anthropic</li>
      </ul>

      <h2>8. Your Rights Under GDPR</h2>
      <p>As a data subject under the EU General Data Protection Regulation (GDPR), you have the following rights:</p>
      <ul>
        <li><strong>Right of Access (Art. 15):</strong> All your data is stored locally on your device and is accessible to you at any time</li>
        <li><strong>Right to Rectification (Art. 16):</strong> You can update your settings and API keys at any time through the Extension's settings panel</li>
        <li><strong>Right to Erasure (Art. 17):</strong> Uninstalling the Extension automatically deletes all locally stored data</li>
        <li><strong>Right to Restrict Processing (Art. 18):</strong> You may restrict processing by ceasing to use specific features</li>
        <li><strong>Right to Data Portability (Art. 20):</strong> Your data is stored in standard Chrome storage format and can be exported using Chrome DevTools</li>
        <li><strong>Right to Object (Art. 21):</strong> You may stop all data processing by uninstalling the Extension</li>
        <li><strong>Right to Lodge a Complaint:</strong> You may file a complaint with your local data protection authority. In Portugal: CNPD (<a href="https://www.cnpd.pt" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.cnpd.pt</a>)</li>
      </ul>

      <h2>9. Legal Basis for Processing</h2>
      <p>We process your data on the following legal bases under GDPR Article 6:</p>
      <ul>
        <li><strong>Contract Performance (Art. 6(1)(b)):</strong> Processing is necessary to provide the Extensions' functionality</li>
        <li><strong>Consent (Art. 6(1)(a)):</strong> You explicitly consent to data processing by entering API keys and using generation features</li>
        <li><strong>Legitimate Interest (Art. 6(1)(f)):</strong> For security measures necessary to protect you and the Extensions</li>
      </ul>

      <h2>10. International Data Transfers</h2>
      <p>When you use the Extensions' generation features, your data is transmitted to servers operated by OpenAI, Inc. (USA), Anthropic, PBC (USA), and Stripe, Inc. (USA). These transfers rely on the EU-US Data Privacy Framework (DPF) adequacy decision and are also supported by Standard Contractual Clauses (SCCs) as a fallback mechanism.</p>

      <h2>11. Data Retention</h2>
      <ul>
        <li><strong>Local storage data:</strong> Retained until you uninstall the Extension or manually clear data</li>
        <li><strong>Usage counter:</strong> Automatically resets at the beginning of each calendar month</li>
        <li><strong>Payment data (ExtensionPay/Stripe):</strong> Retained according to Stripe's data retention policies</li>
      </ul>

      <h2>12. Children's Privacy</h2>
      <p>The Extensions are not intended for use by individuals under the age of 13. We do not knowingly collect personal data from children under this age.</p>

      <h2>13. Browser Permissions</h2>
      <p>The Extensions request Chrome permissions with specific and limited purposes:</p>
      <ul>
        <li><strong>activeTab:</strong> Accesses the current Etsy page to extract listing data and insert generated content</li>
        <li><strong>storage:</strong> Stores your settings, API keys, and usage counter locally</li>
        <li><strong>host_permissions (etsy.com):</strong> Injects the Extension's UI panel on Etsy pages</li>
        <li><strong>host_permissions (extensionpay.com):</strong> Required for payment processing</li>
        <li><strong>host_permissions (instagram.com, pinterest.com) — Social Engine only:</strong> Required for direct publishing features</li>
      </ul>

      <h2>14. Security Measures</h2>
      <ul>
        <li>All external communications use HTTPS encryption</li>
        <li>No server-side storage of user data (zero-knowledge architecture)</li>
        <li>Manifest V3 security model with restricted Content Security Policy</li>
        <li>Input validation and sanitization</li>
      </ul>

      <h2>15. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Material changes will be communicated through the Chrome Web Store listing. Continued use of the Extensions after changes constitutes acceptance of the updated policy.</p>

      <h2>16. Contact Us</h2>
      <p>
        VENTOS ARQUEÁVEIS UNIPESSOAL LDA<br />
        Registered in Portugal<br />
        Email: <a href="mailto:support@craftpilotapp.com" className="text-primary hover:underline">support@craftpilotapp.com</a><br />
        Website: <a href="https://craftpilotapp.com" className="text-primary hover:underline">https://craftpilotapp.com</a><br />
        Complaints Book (Livro de Reclamações): <a href="https://www.livroreclamacoes.pt" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a>
      </p>

      <p className="mt-8 text-sm">© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. All rights reserved.</p>
    </>
  );
}
