export const EmailLink = ({ children, emailAddress, title, text }) => (
  <a
    href={`mailto:${emailAddress}`}
    onClick={(evt) => {
      window.open(`mailto:${emailAddress}`, title)
      event.preventDefault()
    }}
    target={'_blank'}
  >
    {children}
  </a>
)
