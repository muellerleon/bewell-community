import { credits } from '../credits.js'

export default function Credits() {
  return (
    <div className="wrap credits">
      <h1>Photo credits &amp; licences</h1>
      <p className="lede" style={{ margin: '16px 0 24px', maxWidth: 760 }}>
        Every photograph on this prototype is an openly licensed stand-in, sourced from Wikimedia Commons, Openverse,
        StockSnap and rawpixel. They are here so the layout can be reviewed with real images — not as final artwork.
      </p>
      <div className="notice">
        <strong>Before this goes live.</strong>
        <p className="small" style={{ marginTop: 8 }}>
          The CC BY and CC BY-SA images carry attribution and share-alike obligations, and none of the people pictured
          consented to appear as CCA members — least of all beside a member quote. Commission or license photography
          before launch. The explainer video is a TED talk used as a placeholder for CCA’s own film.
        </p>
      </div>
      <table>
        <thead>
          <tr><th>File</th><th>Licence</th><th>Original title</th><th>Source</th></tr>
        </thead>
        <tbody>
          {credits.map((c) => (
            <tr key={c.id}>
              <td>{c.id}.jpg</td>
              <td>{c.license}</td>
              <td>{c.title}</td>
              <td><a href={c.source} target="_blank" rel="noreferrer">{new URL(c.source).hostname}</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
