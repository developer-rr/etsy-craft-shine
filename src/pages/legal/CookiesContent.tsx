export default function CookiesContent() {
  return (
    <>
      <p className="italic">
        EtsyCraft — AI-Powered Tools for Etsy Sellers (including EtsyCraft AI and EtsyCraft Social Engine)
      </p>
      <p><strong>Effective Date:</strong> March 2026</p>

      <h2>1. Introduction</h2>
      <p>This Cookie &amp; Local Storage Policy explains how the EtsyCraft Chrome browser extensions — EtsyCraft AI (SEO Listing Generator) and EtsyCraft Social Engine (Social Media Content &amp; Publishing) — and the EtsyCraft website (craftpilotapp.com), operated by VENTOS ARQUEÁVEIS UNIPESSOAL LDA, use cookies and local storage technologies. This policy should be read in conjunction with our Privacy Policy.</p>

      <h2>2. Cookies and Local Storage in the Extensions</h2>
      <p><strong>Important:</strong> The Extensions do not use HTTP cookies. However, they use chrome.storage.local, which is a browser storage technology that falls within the scope of Article 5(3) of the ePrivacy Directive (2002/58/EC).</p>
      <p>The Extensions use only chrome.storage.local — an isolated storage area provided by Chrome specifically for extensions. It is not shared with websites, other extensions, or third parties. The Extensions do <strong>NOT</strong> use: HTTP cookies, localStorage / sessionStorage (web APIs), IndexedDB, chrome.storage.sync, or any cross-site tracking technologies.</p>

      <h2>3. What Data the Extensions Store and Why</h2>
      <p>The following data is stored locally on your device via chrome.storage.local. All storage is strictly necessary for the Extensions to function:</p>

      <h3>EtsyCraft AI</h3>
      <ul>
        <li><strong>apiKey:</strong> Your OpenAI API key — required to make AI generation requests</li>
        <li><strong>anthropicKey:</strong> Your Anthropic API key — required to make AI generation requests</li>
        <li><strong>provider:</strong> Selected AI provider — determines which API to call</li>
        <li><strong>model_openai / model_anthropic:</strong> Selected AI model name — configures generation parameters</li>
        <li><strong>language:</strong> Generation language — generates content in correct language</li>
        <li><strong>tone:</strong> Tone preference — customizes content style</li>
        <li><strong>usage:</strong> Generation count + reset date — enforces subscription plan limits</li>
        <li><strong>userPlan / isPro:</strong> Subscription plan info — determines feature access</li>
        <li><strong>cachedModels_openai:</strong> Cached list of AI models — avoids redundant API calls</li>
      </ul>

      <h3>EtsyCraft Social Engine (additional keys)</h3>
      <ul>
        <li><strong>brandVoice:</strong> Custom brand tone settings — maintains consistent social media content style</li>
        <li><strong>platformPreferences:</strong> Instagram/Pinterest settings — stores publishing preferences</li>
        <li><strong>socialUsage:</strong> Social Engine generation count — enforces Social Engine plan limits</li>
      </ul>

      <h2>4. Legal Basis Under the ePrivacy Directive</h2>
      <p>Article 5(3) of the ePrivacy Directive requires consent for storing information on a user's terminal equipment, with an exemption for storage that is strictly necessary to provide a service explicitly requested by the user.</p>
      <p>All storage by the Extensions qualifies for the "strictly necessary" exemption because the Extensions cannot function without stored settings, and no data is stored for analytics, advertising, profiling, or any purpose unrelated to the service you explicitly requested.</p>
      <p>Therefore, the Extensions do not require cookie consent banners or opt-in mechanisms for their local storage.</p>

      <h2>5. Cookies on Our Website (craftpilotapp.com)</h2>

      <h3>5.1 Strictly Necessary Cookies</h3>
      <p>These cookies are essential for the website to function and cannot be disabled. They include session cookies for form submissions and security tokens, and cookie consent preference storage.</p>

      <h3>5.2 Analytics Cookies</h3>
      <p>If you consent, we may use Google Analytics 4 to understand how visitors use our website. These cookies collect anonymous usage data (pages visited, time on site, referral source). Analytics cookies are only loaded after you accept cookies through our cookie consent banner. You can withdraw consent at any time.</p>

      <h3>5.3 No Advertising Cookies</h3>
      <p>We do not use any advertising cookies, retargeting pixels, or social media tracking cookies on our website.</p>

      <h2>6. Third-Party Cookies and Storage</h2>

      <h3>6.1 ExtensionPay / Stripe</h3>
      <p>When you upgrade to a paid plan, you are redirected to ExtensionPay (powered by Stripe) for payment processing. Stripe may set its own cookies for fraud prevention and payment processing. These are governed by Stripe's Cookie Policy.</p>

      <h3>6.2 OpenAI / Anthropic APIs</h3>
      <p>API calls to OpenAI and Anthropic are direct client-to-server HTTPS requests. These services do not set cookies in the Extension's context.</p>

      <h3>6.3 Instagram / Pinterest (Social Engine)</h3>
      <p>When using direct publishing features in Social Engine, authentication with Instagram and Pinterest may involve cookies set by those platforms on their own domains. These are governed by Meta's Cookie Policy and Pinterest's Cookie Policy respectively.</p>

      <h2>7. Data Retention and Deletion</h2>
      <p>Locally stored data is retained as follows:</p>
      <ul>
        <li><strong>Settings and API keys:</strong> Retained indefinitely until you uninstall the Extension or manually clear data</li>
        <li><strong>Usage counter:</strong> Automatically resets at the beginning of each calendar month</li>
        <li><strong>Model cache:</strong> Overwritten each time models are refreshed</li>
      </ul>
      <p>To delete all stored data: Uninstall the Extension (all chrome.storage.local data is automatically removed), or navigate to chrome://extensions, find the Extension, and click "Remove."</p>

      <h2>8. Managing Cookies</h2>
      <p><strong>For the Extensions:</strong> All data is managed through the Extension's settings panel or by uninstalling the Extension.</p>
      <p><strong>For the website:</strong> You can manage cookie preferences through the cookie consent banner on craftpilotapp.com. You can also manage cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, and set preferences for specific websites.</p>

      <h2>9. Your Rights</h2>
      <p>Under the GDPR and ePrivacy framework, you have the right to:</p>
      <ul>
        <li>Access all data stored by the Extensions (visible via Chrome DevTools)</li>
        <li>Delete all stored data at any time by uninstalling the Extensions</li>
        <li>Modify stored data through the Extension's settings panel</li>
        <li>Control website cookies through the consent banner</li>
        <li>Lodge a complaint with your data protection authority (in Portugal: CNPD — <a href="https://www.cnpd.pt" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.cnpd.pt</a>)</li>
      </ul>

      <h2>10. Changes to This Policy</h2>
      <p>We may update this Cookie &amp; Local Storage Policy from time to time. Changes will be communicated through the Chrome Web Store listing and on our website. The effective date at the top indicates the latest revision.</p>

      <h2>11. Contact Us</h2>
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
