# Rudraksha Enterprises - Master Domain & Deployment Guide

This guide details how to host your React website, map your custom domain (DNS), activate SSL (HTTPS), handle redirections, and speed up Google Search indexing. 

To solve your issue of the website not loading on direct domain entries and route refreshes, we have already added standard routing rewrite configurations to your workspace.

---

## 📂 Summary of Configurations We Just Added

We have pre-configured routing fallbacks and search indexing files in your codebase so your application works **out of the box** on any major hosting provider:

| File Path | Target Hosting / Purpose | Description |
| :--- | :--- | :--- |
| `public/_redirects` | **Netlify** | Forces Netlify to rewrite all URL subpaths (e.g. `/about`, `/contact`) to `index.html`, preventing server-side `404` errors. |
| `vercel.json` | **Vercel** | Outlines Vercel routing rules to rewrite all subpaths back to the entry point `index.html`. |
| `public/404.html` | **GitHub Pages** | A fallback script that intercepts 404 errors on deep URLs, converts the path to a query, and loads the React Router safely. |
| `public/.htaccess` | **cPanel / Apache** | Redirect rules for traditional Apache servers (e.g., Hostinger, GoDaddy, Bluehost, Namecheap shared hosting). |
| `public/robots.txt` | **All Crawlers** | Informs search engine bots (Google, Bing) that your site is fully indexable and points to your sitemap. |
| `public/sitemap.xml` | **Search Engines** | A directory of all your website paths (`/`, `/about`, `/products`, etc.) so bots can index every page. |

---

## 🌐 Step 1: Adjusting Your Custom Domain (If Different)

In our configurations, we used **`https://rudrakshaenterprises.com`** as the default domain. If your registered domain is different (e.g., `rudraksha.in` or `rudrakshaenterprises.in`):

1. **Open** `index.html` and search/replace the `https://rudrakshaenterprises.com` occurrences in:
   - The `<link rel="canonical" href="..." />` tag.
   - The Open Graph metadata (`og:url`, `og:image`).
   - The Twitter card metadata (`twitter:url`, `twitter:image`).
   - The `@type: LocalBusiness` JSON-LD schema config.
2. **Open** `public/robots.txt` and replace it in the `Sitemap:` path.
3. **Open** `public/sitemap.xml` and replace it inside all the `<loc>` tags.

---

## 🛠️ Step 2: Mapping DNS Records at Your Registrar

To make your website resolve when typing the domain directly, you must configure the **DNS Settings** inside your domain registrar's account (e.g. GoDaddy, Hostinger, Namecheap, Google Domains). 

Here are the typical DNS records to map. Log in, locate your domain's **DNS Zone Editor**, and add the following records depending on where you are hosting:

### A. If Hosting on Netlify:
1. Set up an **A Record**:
   - **Type**: `A`
   - **Name/Host**: `@` (represents your root domain, e.g. `rudrakshaenterprises.com`)
   - **Value/Points To**: `75.2.60.5` (Netlify's load balancer IP)
   - **TTL**: Default (e.g. `3600` or `14400`)
2. Set up a **CNAME Record**:
   - **Type**: `CNAME`
   - **Name/Host**: `www` (handles `www.rudrakshaenterprises.com`)
   - **Value/Points To**: `your-subdomain.netlify.app` (your unique Netlify app URL)

### B. If Hosting on Vercel:
1. Set up an **A Record**:
   - **Type**: `A`
   - **Name/Host**: `@`
   - **Value/Points To**: `76.76.21.21` (Vercel's Anycast IP address)
2. Set up a **CNAME Record**:
   - **Type**: `CNAME`
   - **Name/Host**: `www`
   - **Value/Points To**: `cname.vercel-dns.com`

### C. If Hosting on GitHub Pages:
1. Set up **A Records** (GitHub recommends adding all four of their IP addresses for redundancy):
   - **Record 1**: Type `A`, Host `@`, Points to `185.199.108.153`
   - **Record 2**: Type `A`, Host `@`, Points to `185.199.109.153`
   - **Record 3**: Type `A`, Host `@`, Points to `185.199.110.153`
   - **Record 4**: Type `A`, Host `@`, Points to `185.199.111.153`
2. Set up a **CNAME Record**:
   - **Type**: `CNAME`
   - **Name/Host**: `www`
   - **Value/Points To**: `your-username.github.io`

### D. If Hosting on Hostinger/cPanel Shared Hosting:
* Hostinger handles this automatically if you use their nameservers. If mapping manually:
1. Set up an **A Record**:
   - **Type**: `A`
   - **Name/Host**: `@`
   - **Value/Points To**: *[Your Hostinger Shared IP address found in your hPanel dashboard]*
2. Set up an **A Record** (or CNAME):
   - **Type**: `A`
   - **Name/Host**: `www`
   - **Value/Points To**: *[Your Hostinger Shared IP address]*

---

## 🚀 Step 3: Setting Up Custom Domain & SSL inside Your Host

Once DNS records are configured, go to your hosting dashboard to complete the mapping and enable secure HTTPS.

### ⚡ On Netlify:
1. Go to **Site Configuration** > **Domain management**.
2. Click **Add a domain** and type your domain (e.g. `rudrakshaenterprises.com`).
3. Netlify will check DNS. Once verified, scroll to the bottom to the **HTTPS** section.
4. Click **Verify DNS configuration** or **Provision Let's Encrypt Certificate**. Netlify will automatically generate a free SSL certificate. It will also handle redirecting `http` to `https` and `www` to non-`www` (or vice-versa) automatically.

### 🔺 On Vercel:
1. Go to your project **Settings** > **Domains**.
2. Add `rudrakshaenterprises.com`. Vercel will ask you if you want to also add the `www` version and redirect to it (highly recommended!).
3. Vercel automatically checks DNS status and generates an SSL certificate once mapped.

### 🐙 On GitHub Pages:
1. Inside your repository, go to **Settings** > **Pages**.
2. Under **Custom domain**, type your domain (e.g. `rudrakshaenterprises.com`) and click **Save**. This will automatically create a `CNAME` file in your main directory.
3. Once GitHub verifies the DNS, check the box for **Enforce HTTPS** (this may take up to 24 hours to become clickable while they provision the Let's Encrypt certificate).

### 🖥️ On Hostinger / cPanel:
1. Go to **Websites** > **Add Website** or manage your current one.
2. Ensure your domain is mapped.
3. Go to the **SSL** section in hPanel/cPanel and click **Install SSL** (Let's Encrypt is provided free by default on Hostinger).
4. Go to **Redirects** or **Hosting Settings** and ensure **Force HTTPS** is enabled.

---

## 🔍 Step 4: Submitting to Google Search Console (Searchability)

To make your website searchable on Google so that users see it when typing your name, you must register it in **Google Search Console**:

1. Visit [Google Search Console](https://search.google.com/search-console) and sign in with your Google account.
2. Click **Add property**.
3. Choose **Domain** verification (requires adding a single `TXT` record at your domain registrar, which is the most reliable way) or **URL prefix** verification (requires uploading a small HTML file to your site).
4. Once verified, select your property.
5. In the left-hand sidebar, click **Sitemaps**.
6. Under "Add a new sitemap", type **`sitemap.xml`** and click **Submit**.
7. Google will queue your sitemap and begin crawling all your React routes (`/about`, `/products`, etc.). Indexing usually takes anywhere from 24 hours to a few days.

---

### 💡 Pro-Tip: Testing DNS Propagation
DNS updates can take up to 24–48 hours to propagate worldwide, though they usually update in less than an hour. You can check the real-time propagation of your records using free tools like [What's My DNS](https://www.whatsmydns.net/).
