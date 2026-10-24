import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://sketchyrobotics.com'),title:'Sketchy Robotics | Real Robot-Drawn Portraits',description:'Bakersfield-based robotic caricature experiences for weddings, celebrations, trade shows and venue partnerships. Real pen. Real paper. Personal keepsakes.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
