import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { filterProps, motion } from "framer-motion"

export async function getServerSideProps(context: any) { 
  var transition = {in: {}, out: {}}
  if(context.req.headers.referer == 'https://fake.fm/') {
    transition = {
      in: {
        opacity: 1,
        y: 0
      },
      out: {
        opacity: 0,
      }
    }
  }
  const ticker = (await (await fetch('https://api1.fake.fm/ticker', {
    method: 'GET',
    mode: 'cors',
    headers: {
        'X-Api-Key': `${process.env.PUBLIC_API_KEY}`,
        'Content-Type': 'application/json'
    }
  })).json()).data;
  return {
    props: {
      ticker,
      transition,
    }
  }
}

const Home: NextPage = ({ticker, transition}: any) => {
  return (
    <motion.div
        initial="out"
        animate="in"
        exit="in"
        variants={transition}
        transition={{duration: 0.5, type: 'linear'}}>
            <video autoPlay muted loop className={styles.bgvideo}>
                <source src='/clouds.mp4' type="video/mp4"/>
            </video>
            <div className={styles.MainContainer}>
                <div className={styles.window}>
                    <img src='/earthlogo.webp' className={styles.cornerIcon}/>
                    <p className={styles.title}>C:/Fakeworld</p>
                    <div className={styles.toolbar}>
                        <div className={styles.vertical_dot} />
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Favorites</p>
                        <p>Tools</p>
                        <p>Help</p>
                    </div>
                    <div className={styles.mainwindow}>
                        <div className={styles.bgimagegradient}/>
                        <h1 className={styles.logotext}>FAKEWORLD</h1>
                        <img className={styles.fakeworldlogo} src='/fakeworld3.webp' alt='' />
                        <div className={styles.firstline}>
                        <div className={styles.navbar}>
                            <p className={styles.navbarheader}>About</p>
                            <p className={styles.navbarabout}>Cultural Architect, Public Menace, and Developer/Designer Dabbling in Web3, Automation, and the Future of Business</p>
                            <br/>
                            <p className={styles.navbarheader}>Link</p>
                            <ul>
                              <li>
                                <a href='https://twitter.com/1fakeworld'>
                                  <p className={styles.navlink}>{`> Twitter`}</p>
                                  <img className={styles.navimg} src='/bird.png' />
                                </a>
                              </li>
                              <li>
                                <a href='https://github.com/fakeecity'>
                                  <p className={styles.navlink}>{`> Github`}</p>
                                  <img className={styles.navimg} src='/github.png' />
                                </a>
                              </li>
                              <li>
                                <a href='https://discordapp.com/users/259094106356187137'>
                                  <p className={styles.navlink}>{`> Discord`}</p>
                                  <img className={styles.navimg} src='/discord.png' />
                                </a>
                              </li>
                            </ul>

                        </div>
                        <div className={styles.ticker}> 
                            <p style={{color:'white'}}>Ethereum Price (USD)</p> 
                            <p style={ticker.priceUp ? {color:'limegreen'} : {color:'red'}}><b>${ticker.price.toFixed(2)}</b></p>
                            <p style={{color:'white'}}>US Public Debt (Trillions)</p>
                            <p style={ticker.debtUp ? {color:'limegreen'} : {color:'red'}}><b>${((ticker.debt)/1000000000000).toFixed(3)}</b></p>
                            <p style={{color:'white'}}>Doomsday Clock</p>
                            <p style={{color:'#b9b9b9'}}><b>{ticker.midnight} seconds to midnight</b></p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
    </motion.div>
  )
}

export default Home
