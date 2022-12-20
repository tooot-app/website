import Layout from '../components/layout'

const Privacy = () => {
  return (
    <Layout title='Privacy Policy' description='Privacy policy of tooot app'>
      <h1>Privacy Policy</h1>
      <h2>What information do we collect?</h2>
      <ul className='list-disc list-inside'>
        <li>
          <s>
            <strong>App usage information:</strong> Your app usage information such as taps on
            buttons are collected anonymously for the purpose of improving functionality. You can
            choose to opt-out of this collection in the app's settings.
          </s>
        </li>
        <li>
          <strong>App performance information:</strong> Such as app crashes information are
          collected for the purpose of improving app stability.
        </li>
      </ul>
      <h2>What do we use your information for?</h2>
      <p>Any of the information we collect from you may be used in the following ways:</p>
      <ul className='list-disc list-inside'>
        <li>To provide the core functionality of the app.</li>
      </ul>
      <h2>Do we disclose any information to outside parties?</h2>
      <p>
        We do not sell, trade, or otherwise transfer to outside parties of aboved mentioned
        collected data. This does not include trusted third parties who assist us in operating our
        site, conducting our business, or servicing you, so long as those parties agree to keep this
        information confidential. We may also release your information when we believe release is
        appropriate to comply with the law, enforce our site policies, or protect ours or others
        rights, property, or safety.
      </p>
      <h2>Changes to our Privacy Policy</h2>
      <p>If we decide to change our privacy policy, we will post those changes on this page.</p>
      <p>This document is CC-BY-SA. It was last updated December 20, 2022.</p>
      <p>
        Originally adapted from the{' '}
        <a href='https://github.com/mastodon/mastodon' target='_blank'>
          Mastodon privacy policy
        </a>
        .
      </p>
    </Layout>
  )
}

export default Privacy
