import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"
import { Header } from "./header/Header"

export const Layout = ({ children }: any) => {
    return(
        <Box minHeight='100vh' backgroundColor='rgba(20, 5, 148, 0.87)'>
            <Header />
                { children }
            <Footer />
        </Box>
    )
}