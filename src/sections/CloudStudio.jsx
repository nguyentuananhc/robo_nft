import React, { useEffect, useState } from 'react'
import Container from 'components/Container'
import Button from 'components/Button'
import CloudStudioImage from '../components/CloudStudioImge'
import { AnimatePresence } from 'framer-motion'
import Subpage from '../components/subpage/Subpage'

const CloudStudio = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.classList.add('subpage-open')
    } else {
      document.body.classList.remove('subpage-open')
    }
  }, [open])

  return (
    <section id="cloud-studio" className="bg-cloud_studio">
      <Container>
        <div className="mb-[63px] flex flex-col-reverse gap-[99px] pt-[73px] xl:mb-[20px] xl:flex-col xl:gap-[103px] xl:pt-[68px]">
          <div className="flex flex-col items-start gap-6 xl:mb-0 xl:items-center xl:gap-[46px]">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between xl:self-stretch">
              <h2 className="text-shadow font-primary text-[42px] font-bold leading-heading text-white drop-shadow-[3px_3px_0px_#181F51] xl:mx-auto xl:pl-5 xl:text-[50px] xl:drop-shadow-[6px_6px_0px_#181F51] xxl:text-[60px]">
                The All-in-one Studio for Everyone{' '}
                <div className="inline-block">in the world of web3!</div>
              </h2>
              <p className="font-secondary text-[14px] font-semibold text-primary xl:w-[465px] xl:shrink-0 xl:text-center xxl:w-[507px] xxl:text-base">
                We build, launch Web3 tools for anyone in need, and share the
                revenue with Enchanting Boxes Holders.
                <br />
                <br />
                Whatever you have in mind, whether it is a collection of NFTs, a
                new token, a token locker, or something else too special to be
                named, you surely can find valuable tools in The CloudStudio to
                create it and make it better!
              </p>
            </div>

            <Button
              onClick={(e) => {
                e.preventDefault()
                setOpen(true)
              }}
            >
              Explore more
            </Button>

            <AnimatePresence mode="wait">
              {open && <Subpage close={() => setOpen(false)} />}
            </AnimatePresence>
          </div>

          <CloudStudioImage />
        </div>
      </Container>
    </section>
  )
}

export default CloudStudio
