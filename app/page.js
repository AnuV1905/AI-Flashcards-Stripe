import Image from 'next/image'
import getStripe from '@/utils/get-stripe'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '@mui/material'


export default function Home() {
    <Container maxWidth="lg">
      <Head>
        <title>FLashcard Saas</title>
        <meta name="description" content="Create flash from your text" />
      </Head>
      
      <Appbar position="static">
        <Toolbar>
          <Typography variant = "h6">Flashcard Saas</Typography>
          <SignedOut>
            <Button>Login</Button>
            <Button>Sing Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </Appbar>
    </Container>
      
  )
}
