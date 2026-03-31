export default function TermsContent() {
  return (
    <>
      <p className="italic">
        EtsyCraft — AI-Powered Tools for Etsy Sellers (including EtsyCraft AI and EtsyCraft Social Engine)
      </p>
      <p><strong>Effective Date:</strong> March 2026</p>

      <h2>1. Acceptance of Terms</h2>
      <p>These Terms of Service and End User License Agreement ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and VENTOS ARQUEÁVEIS UNIPESSOAL LDA ("Company," "we," "us," or "our"), governing your use of the EtsyCraft Chrome browser extensions — EtsyCraft AI (SEO Listing Generator) and EtsyCraft Social Engine (Social Media Content &amp; Publishing) — collectively referred to as "the Extensions."</p>
      <p>By installing, accessing, or using any of the Extensions, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree, you must immediately uninstall the Extensions and cease all use.</p>

      <h2>2. Description of Service</h2>
      <p>The Extensions are Chrome browser tools for Etsy sellers:</p>
      <p><strong>EtsyCraft AI</strong> generates SEO-optimized titles, descriptions, and tags for Etsy product listings using artificial intelligence. It operates by extracting listing data from Etsy editing pages upon user action, sending data to AI providers using your personal API keys, and displaying AI-generated content within the Etsy listing editor.</p>
      <p><strong>EtsyCraft Social Engine</strong> generates social media content (Instagram captions with hashtags, Pinterest pins with SEO descriptions) from your Etsy listings using AI, with optional direct publishing to Instagram and Pinterest.</p>
      <p>The Extensions do not publish, modify, or submit Etsy listings automatically. All changes to your Etsy listings require your explicit action. Social media publishing (Social Engine Pro/Pro+) requires your explicit confirmation before each post.</p>

      <h2>3. BYOK (Bring Your Own Key) Model</h2>

      <h3>3.1 Your API Keys</h3>
      <p>The Extensions operate on a BYOK model. You must provide your own API keys from OpenAI and/or Anthropic to use AI generation features. You acknowledge and agree that:</p>
      <ul>
        <li>You are solely responsible for maintaining the security and confidentiality of your API keys</li>
        <li>You are solely responsible for all charges incurred through your API keys</li>
        <li>You will comply with the terms of service of your API provider(s)</li>
        <li>The Company is not responsible for any unauthorized use of your API keys</li>
        <li>API keys are stored locally in your browser and are not transmitted to our servers</li>
      </ul>

      <h3>3.2 API Costs</h3>
      <p>Each AI generation request consumes tokens from your API account with OpenAI or Anthropic. You are fully responsible for monitoring and managing your API usage and costs. The Company does not control, guarantee, or reimburse any API costs.</p>

      <h2>4. Subscription Plans and Payments</h2>

      <h3>4.1 EtsyCraft AI Plans</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 border-b border-border font-semibold">Plan</th>
              <th className="text-left p-3 border-b border-border font-semibold">Price</th>
              <th className="text-left p-3 border-b border-border font-semibold">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-medium">Free</td>
              <td className="p-3">$0/month</td>
              <td className="p-3">5 generations/month, SEO titles + descriptions + tags, basic category prompts, 7 languages</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Pro</td>
              <td className="p-3">$4.99/month</td>
              <td className="p-3">Unlimited generations (BYOK), all categories, tone customization, priority support</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>4.2 EtsyCraft Social Engine Plans</h3>
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-border">
          <thead>
            <tr className="bg-muted/50">
              <th className="text-left p-3 border-b border-border font-semibold">Plan</th>
              <th className="text-left p-3 border-b border-border font-semibold">Price</th>
              <th className="text-left p-3 border-b border-border font-semibold">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border">
              <td className="p-3 font-medium">Free</td>
              <td className="p-3">$0/month</td>
              <td className="p-3">5 generations/month, copy to clipboard, download images, 7 languages</td>
            </tr>
            <tr className="border-b border-border">
              <td className="p-3 font-medium">Pro</td>
              <td className="p-3">$4.99/month</td>
              <td className="p-3">Unlimited generations (BYOK), Brand Voice, direct posting to Pinterest</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Pro+</td>
              <td className="p-3">$9.99/month</td>
              <td className="p-3">Everything in Pro + direct posting to Instagram, priority support</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>All plans include access to all supported AI models and languages. The subscription fee is separate from and in addition to any API usage costs charged by OpenAI or Anthropic.</p>

      <h3>4.3 Payment Processing</h3>
      <p>All payments are processed through ExtensionPay (powered by Stripe). The Company does not directly collect, store, or process payment card information.</p>

      <h3>4.4 Automatic Renewal and Cancellation</h3>
      <p><strong>IMPORTANT — AUTOMATIC RENEWAL:</strong> Paid subscriptions renew automatically at the end of each billing period at the then-current subscription price.</p>
      <p>You may cancel your subscription at any time through the Extension's settings panel ("Manage Subscription") or through ExtensionPay. Cancellation takes effect at the end of the current billing period — you will retain access to paid features until that date. No partial refunds are provided for unused portions of a billing period unless required by applicable law.</p>

      <h3>4.5 Right of Withdrawal (EU Consumers)</h3>
      <p>If you are a consumer in the European Union, you have a right to withdraw from this contract within 14 calendar days from the date of subscription, without giving any reason, in accordance with Directive 2011/83/EU.</p>
      <p>By using the Extension's paid generation features during the withdrawal period, you expressly request that performance begin immediately. You acknowledge that: (a) you have given prior express consent to the commencement of performance; (b) you acknowledge that you will lose your right of withdrawal once the service has been fully performed; and (c) you will receive confirmation of this consent on a durable medium. These are the three cumulative conditions required under Article 16(m) of Directive 2011/83/EU.</p>
      <p>If you have not used any paid generations, you may exercise your withdrawal right by sending a clear statement to <a href="mailto:support@etsycraft.com" className="text-primary hover:underline">support@etsycraft.com</a>. See our Refund Policy for the model withdrawal form.</p>

      <h2>5. License Grant</h2>
      <p>Subject to these Terms and payment of applicable fees, the Company grants you a limited, non-exclusive, non-transferable, revocable license to install and use the Extensions on Chrome browsers for your personal or business purposes related to managing Etsy listings and associated social media marketing.</p>
      <p>You may not:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the Extensions</li>
        <li>Modify, adapt, or create derivative works based on the Extensions</li>
        <li>Distribute, sublicense, lease, or lend the Extensions to third parties</li>
        <li>Use the Extensions for any unlawful purpose or in violation of Etsy's terms of service</li>
        <li>Attempt to circumvent subscription limits or payment requirements</li>
        <li>Use automated tools to interact with the Extensions (bots, scripts, etc.)</li>
      </ul>

      <h2>6. Intellectual Property</h2>

      <h3>6.1 Extension IP</h3>
      <p>The Extensions, including their code, design, algorithms, prompts, and documentation, are the intellectual property of the Company and are protected by copyright, trade secret, and other applicable laws.</p>

      <h3>6.2 Generated Content</h3>
      <p>Content generated by the Extensions using AI belongs to you, subject to the terms of your API provider (OpenAI or Anthropic). The Company claims no ownership over AI-generated content. You are solely responsible for reviewing, editing, and ensuring that generated content complies with Etsy's policies, social media platform policies, and applicable laws.</p>

      <h3>6.3 Your Content</h3>
      <p>You retain all rights to your original listing content and images that you create and input into Etsy.</p>

      <h2>7. Social Media Publishing (Social Engine)</h2>

      <h3>7.1 Platform Accounts</h3>
      <p>Direct publishing features require you to connect your own Instagram Business/Creator account and/or Pinterest account. You are responsible for maintaining access to these accounts and complying with each platform's terms of service.</p>

      <h3>7.2 Published Content</h3>
      <p>You are solely responsible for all content published to social media through the Social Engine, including captions, hashtags, descriptions, and images. The Company is not responsible for any consequences of social media posts, including account restrictions or suspensions by Instagram or Pinterest.</p>

      <h3>7.3 Image Rights</h3>
      <p>When using listing photos for social media posts, you confirm that you own or have the right to use these images on social media platforms.</p>

      <h2>8. Disclaimers and Limitations</h2>

      <h3>8.1 AI-Generated Content</h3>
      <p>You acknowledge and agree that:</p>
      <ul>
        <li>AI-generated content may contain inaccuracies, errors, or irrelevant information</li>
        <li>Generated content may require manual review and editing before use</li>
        <li>The Company does not guarantee that generated content will improve your SEO rankings, sales, social media engagement, or visibility</li>
        <li>You are solely responsible for all content published on your Etsy listings and social media accounts</li>
      </ul>

      <h3>8.2 Platform Dependency</h3>
      <p>The Extensions interact with Etsy's website, Instagram, and Pinterest through APIs and DOM manipulation. Changes to these platforms may temporarily or permanently affect the Extensions' functionality. The Company is not affiliated with Etsy, Inc., Meta Platforms, Inc., or Pinterest, Inc.</p>

      <h3>8.3 No Warranty</h3>
      <p className="uppercase font-semibold">THE EXTENSIONS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>

      <h2>9. Limitation of Liability</h2>
      <p><strong>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW,</strong> the Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
      <ul>
        <li>Loss of profits, revenue, data, or business opportunities</li>
        <li>Costs of API usage or charges from third-party providers</li>
        <li>Damages resulting from unauthorized access to your API keys</li>
        <li>Damages arising from platform policy changes or account actions by Etsy, Instagram, or Pinterest</li>
        <li>Damages caused by inaccurate or misleading AI-generated content</li>
        <li>Consequences of social media posts made through the Social Engine</li>
      </ul>
      <p>The Company's total aggregate liability under these Terms shall not exceed the amount you paid to the Company for the Extensions in the twelve (12) months preceding the claim.</p>

      <h2>10. Indemnification</h2>
      <p>You agree to indemnify, defend, and hold harmless the Company from and against any claims, damages, losses, liabilities, costs, and expenses arising from your use of the Extensions, your violation of these Terms, your violation of any platform's terms of service or applicable laws, content published using the Extensions, and unauthorized use or disclosure of your API keys.</p>

      <h2>11. Termination</h2>
      <p>Either party may terminate this agreement at any time. <strong>By you:</strong> Uninstall the Extensions and cancel any active subscription. <strong>By us:</strong> We may suspend or terminate your access for violation of these Terms.</p>
      <p>Upon termination, your license to use the Extensions is revoked. Sections 6, 8, 9, 10, and 12 survive termination.</p>

      <h2>12. Governing Law and Dispute Resolution</h2>
      <p>These Terms are governed by the laws of Portugal. Any disputes shall be subject to the exclusive jurisdiction of the courts of Portugal.</p>
      <p>For EU consumers: Nothing in these Terms affects your statutory rights under mandatory consumer protection legislation. You may also use the European Commission's Online Dispute Resolution platform at <a href="https://ec.europa.eu/odr" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/odr</a>.</p>

      <h2>13. Modifications to Terms</h2>
      <p>The Company reserves the right to modify these Terms at any time. Material changes will be communicated through the Chrome Web Store listing. Continued use of the Extensions after changes constitutes acceptance.</p>

      <h2>14. EU AI Act Compliance</h2>
      <p>The Extensions use third-party AI systems (OpenAI, Anthropic) to generate content. Under the EU AI Act (Regulation 2024/1689), transparency obligations under Article 50 become applicable on August 2, 2026. We recommend that you do not represent AI-generated content as exclusively human-authored in contexts where this could be misleading.</p>

      <h2>15. Miscellaneous</h2>
      <ul>
        <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions continue in full force.</li>
        <li><strong>Waiver:</strong> Failure to enforce any provision shall not constitute a waiver.</li>
        <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, Cookie Policy, Refund Policy, and Acceptable Use Policy, constitute the entire agreement.</li>
        <li><strong>Assignment:</strong> You may not assign these Terms without prior written consent.</li>
        <li><strong>Force Majeure:</strong> The Company shall not be liable for failures caused by events beyond its reasonable control.</li>
      </ul>

      <h2>16. Contact</h2>
      <p>
        VENTOS ARQUEÁVEIS UNIPESSOAL LDA<br />
        Registered in Portugal<br />
        Email: <a href="mailto:support@etsycraft.com" className="text-primary hover:underline">support@etsycraft.com</a><br />
        Website: <a href="https://etsycraft.com" className="text-primary hover:underline">https://etsycraft.com</a><br />
        Complaints Book (Livro de Reclamações): <a href="https://www.livroreclamacoes.pt" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.livroreclamacoes.pt</a>
      </p>

      <p className="mt-8 text-sm">© 2026 VENTOS ARQUEÁVEIS UNIPESSOAL LDA. All rights reserved.</p>
    </>
  );
}
