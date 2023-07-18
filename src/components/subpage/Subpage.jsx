import { AnimatePresence, motion } from 'framer-motion'
import React, { useState, lazy, Suspense } from 'react'
import backgroundImage from 'assets/images/subpage-background.png'
import Container from 'components/Container'
import Navbar from '../Navbar'
import Button from '../Button'
import item1 from 'assets/images/item1.png'
import item2 from 'assets/images/item2.png'
import item3 from 'assets/images/item3.png'
import item1t from 'assets/images/item1-thumbnail.png'
import item2t from 'assets/images/item2-thumbnail.png'
import item3t from 'assets/images/item3-thumbnail.png'
import Floating from '../Floating'
import SubpageHeroText from './SubpageHeroText'
import SubpageOptions from './SubpageOptions'
import Modal from './Modal'

const modals = [
  {
    title: 'Token Management',
    tabs: [
      {
        label: 'Token Minter',
        content: (
          <div>
            NFTCloud Studio makes token minting accessible to everyone,
            regardless of their coding abilities. Create your own token with
            only a few clicks after sketching the tokenomics, such as whether it
            should be burnable or mintable and how it should interact with other
            tokens.
            <br />
            <br />
            Token Minter is able to accommodate a wide range of tokens,
            including standard utility tokens, deflationary tokens with tax or
            charity purposes, or incentive tokens.
            <br />
            <br />
            Tokens may be tailored to the specific demands of a project with a
            wide range of options
          </div>
        ),
      },
      {
        label: 'Token Launcher',
        content: (
          <div>
            You want to make your tokens available to the public, or you want to
            raise money from your most dedicated supporters? NFTCloud offers a
            variety of solutions for the various sales types. Just a few clicks
            are all it takes to set up your token sales.
            <br />
            <br />
            You can win the trust of your investors by using NFTCloud Token
            Launcher, whose smart contracts have been subjected to rigorous
            testing and auditing.
          </div>
        ),
      },
      {
        label: 'Liquidity Controller',
        content: (
          <div>
            Are you tired of snipebots or the other errors that might occur in
            the listing events?
            <br />
            <br />
            Our platform gives Product Owners the ability to easily plan out the
            listing events in advance, so all you have to do is sit back, relax,
            and let things to unfold as they should.
            <br />
            <br />
            Everything is ready with only a few clicks, including adding
            liquidity at the appropriate moment, appropriatelydistributing
            tokens to investors, protecting against snipebots, and plenty more.
          </div>
        ),
      },
      {
        label: 'Bulksender',
        content: (
          <div>
            Large-scale token distribution via conventional P2P methods is
            typically time-consuming and error-prone, and may incur higher gas
            fees due to an influx of transaction requests. NFTCloud overcomes
            these challenges by providing a bulk sending function that allows
            users to process a large number of token transfers in a very
            efficient manner - batching them in groups of token transfers per
            transaction.
            <br />
            <br />
            Our optimized smart contracts can minimize the gas fee for users,
            allowing them to transfer tokens to thousands of receiving addresses
            at the lowest possible fee.
          </div>
        ),
      },
      {
        label: 'Token locker',
        content: (
          <div>
            You need a safe place to store your digital assets, a reliable
            method to transfer locked tokens to others, or you want to boost
            trust in your community by keeping liquidity tokens untouchable?
            <br />
            <br />
            Users may secure their tokens (single tokens/LP tokens) using the
            Token Locker. In addition, there is a vesting mechanism that will
            enable you to sell your token at a discount.
            <br />
            <br />
            While users' tokens or NTF are locked in the vault, they may freely
            transfer ownership of the asset to another wallet, allowing them to
            use the asset as a mortgage and generate liquidity.
          </div>
        ),
      },
    ],
  },
  {
    title: 'Mint & Manage NFT',
    tabs: [
      {
        label: 'NFT Minter',
        content: (
          <div>
            NFT Minter supports a variety of NFT types and sizes to be created
            across multiple blockchains, with the minimized minting cost brought
            by optimized minting smart contracts.
            <br />
            <br />
            NFTs can be issued as single, standalone entities or generative sets
            with multiple attributes (such as PFPs), with limited or unlimited
            edition and collection sizes. Users can use self-service tools to
            upload, verify, and add metadata to each file, and also can generate
            a random combination of specified features or attributes to apply
            while minting NFTs.
          </div>
        ),
      },
      {
        label: 'NFT Launcher',
        content:
          'Is it now easier than it has ever been before to make the pieces in your art collection available to the general public? NFT Launcher gives users a broad variety of choices to choose from in order to cater to various categories of sales. Just a few clicks before you are ready for your first NFT collection sales on blockchain.',
      },
      {
        label: 'NFT Private Marketplace',
        content:
          'For Product Owner who wants to build a private marketplace tailor-made for their own community that supports exclusive filters and meet special requirements, you can use our tools to make it come true. Just register the project, fill your requirements in the setting, and your desired result would be brought to life by CloudStudio.',
      },
    ],
  },
  {
    title: 'Social & Community',
    tabs: [
      {
        label: 'New Center',
        content: (
          <div>
            News center helps users to quickly catch up on all of the most
            recent news by aggregating news from a user's choice of sources and
            pop it up on their device screens as soon as the stories are
            published.
            <br />
            <br />
            Users can change their preferences at any time through their
            settings. VIP users, such as holders of NFTs in the NFTCloud
            Collection, have access to many additional features, including
            individualized content filters and premium news sources.
          </div>
        ),
      },
      {
        label: 'Customized alert bots',
        content: (
          <div>
            A feature that automates several tasks for you, such as sending you
            alerts when certain conditions are met, keeping track of your money,
            and trading automatically. It's a set of high-tech utilities for
            making custom bots that serve the user's needs and provide them with
            maximum convenience.
            <br />
            <br />
            In addition, VIP users can set off an infinite number of alerts
            simultaneously and construct alerts with even more customization
            options.
          </div>
        ),
      },
      {
        label: 'eKYC',
        content: (
          <div>
            NFTCloud eKYC solution acts as a third-party KYC to guarantee the
            authenticity of the projects while protecting the privacy of the
            project owner. The identities of the project owner is determined by
            submitting personal documentations to NFTCloud automated platform.
            To confirm the validity of the data submitted, NFTCloud will run it
            via its network of identity verification partners.
            <br />
            <br />
            If there are allegations that the project is rife with fraud or
            scams, we will share such information with the proper authorities.
          </div>
        ),
      },
    ],
  },
]

const Subpage = ({ close }) => {
  const [showOption, setShowOption] = useState(false)
  const [selectedOption, setSelectedOption] = useState(0)
  const [open, setOpen] = useState(false)

  const container = {
    show: {
      top: 0,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        staggerChildren: 0.3,
        duration: 0.3,
        when: 'beforeChildren',
      },
    },
    hidden: {
      top: '100%',
      left: 0,
      right: 0,
      opacity: 0,
      transition: {
        ease: 'easeIn',
        duration: 0.3,
      },
    },
  }

  const items = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 50,
    },
  }

  const button = {
    show: {
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
    },
  }

  const background = {
    show: {
      scale: 1.1,
      opacity: 1,
      transition: {
        ease: 'easeIn',
        duration: 1,
      },
    },
    hidden: {
      scale: 1,
      opacity: 0,
    },
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="fixed top-0 left-0 right-0 bottom-0 z-[100] flex h-full w-full flex-col overflow-hidden bg-subpage"
    >
      <motion.div
        variants={background}
        className="absolute top-0 left-0 right-0 bottom-0 z-10"
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-subpage_mobile xl:hidden xl:bg-subpage"></div>
        <img
          src={backgroundImage}
          className="h-full w-full object-cover"
          alt=""
        />
      </motion.div>

      <motion.div variants={items} className="relative z-20">
        <Container>
          <Navbar onLinkClick={close} />
        </Container>
      </motion.div>

      <div className="relative z-10 flex flex-1 flex-col xl:hidden xl:items-start">
        <AnimatePresence mode="wait">
          <Container className="self-stretch">
            <motion.button
              variants={items}
              className="ml-5 flex items-center gap-2 self-start font-primary font-bold text-secondary xl:hidden"
              onClick={() => {
                if (showOption) {
                  setShowOption(false)
                } else {
                  close()
                }
              }}
            >
              <svg
                width="6"
                height="12"
                viewBox="0 0 12 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 1.5L1.5 10.5L10.5 19.5"
                  stroke="#FFB524"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back
            </motion.button>
          </Container>

          {!showOption ? (
            <motion.div
              key="welcome"
              variants={items}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.2,
                },
              }}
              className="relative z-10 flex flex-1 items-center "
            >
              <SubpageHeroText onExploreClick={() => setShowOption(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="options"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="flex-1"
            >
              <SubpageOptions
                selectedOption={selectedOption}
                onSelecteOption={setSelectedOption}
                onViewClick={() => setOpen(true)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative z-20 hidden flex-1 justify-center xl:flex xl:flex-col">
        <motion.div variants={items}>
          <SubpageHeroText onBack={close} />
        </motion.div>

        <motion.div variants={items}>
          <Container>
            <div className="flex items-start justify-between px-[100px]">
              <div className="relative flex flex-col items-start">
                <div className="w-[280px]">
                  <Floating>
                    <img src={item1} alt="" />
                  </Floating>
                </div>

                <div className="absolute bottom-5 left-0">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedOption(0)
                      setOpen(true)
                    }}
                  >
                    Token Management
                  </Button>
                </div>
              </div>

              <div className="relative mt-20 flex flex-col items-start">
                <div className="w-[280px]">
                  <Floating>
                    <img src={item2} alt="" />
                  </Floating>
                </div>

                <div className="absolute bottom-5 left-0">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedOption(1)
                      setOpen(true)
                    }}
                  >
                    Mint & Manage NFT
                  </Button>
                </div>
              </div>

              <div className="relative mt-4 flex flex-col items-start">
                <div className="w-[280px]">
                  <Floating>
                    <img src={item3} alt="" />
                  </Floating>
                </div>

                <div className="absolute bottom-5 left-0">
                  <Button
                    onClick={(e) => {
                      e.preventDefault()
                      setSelectedOption(2)
                      setOpen(true)
                    }}
                  >
                    Project Hub
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </motion.div>
      </div>

      <Suspense>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          {...modals[selectedOption]}
        />
      </Suspense>
    </motion.div>
  )
}

export default Subpage
