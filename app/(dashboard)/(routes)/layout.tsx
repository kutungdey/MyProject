import { ClerkProvider } from "@clerk/nextjs"
const DashboardLayout = (props: {
  children: React.ReactNode
}) => {
  return(
    <ClerkProvider>
      <div>{props.children}</div>
    </ClerkProvider>
  )
}

export default DashboardLayout