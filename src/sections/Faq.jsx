import React, { useEffect, useRef } from 'react'
import Container from '@components/Container'
import { Accordion } from 'flowbite-react'

const Faq = () => {
  return (
    <section className="bg-faq">
      <Container>
        <div className="mx-auto mb-[84px] pt-[50px] xl:max-w-[720px] xl:pt-[30px]">
          <h2 className="mb-5 text-center text-[32px] font-bold text-secondary xl:text-[60px]">
            Frequently
            <br />
            Asked Question
          </h2>

          <Accordion className="!border-0">
            <Accordion.Panel>
              <div className="mb-[10px] !border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary !shadow-faq hover:bg-white focus:!ring-0">
                  Are the tools in CloudStudio free to use ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  While the vast majority of our resources are entirely free to
                  our users, complex tools may require payment in our platform
                  token.
                </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel>
              <div className="mb-[10px] !border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg !border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary shadow-faq hover:bg-white focus:!ring-0">
                  What’s the Enchanting Collection ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  It's a trove of precious treasures concealed in the sky. Those
                  valuables are not just eye candy; they also promise financial
                  benefits to whoever acquires them. Read our Docs to learn more
                  about the archive.
                </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel>
              <div className="mb-[10px] !border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg !border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary shadow-faq hover:bg-white focus:!ring-0">
                  Who stands behind the NFTCloud ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  We are a group of web3 enthusiasts, digital creatives,
                  businesspeople, developers, and app makers. We deeply believe
                  that our products are the crucial shortcuts that allow
                  everyone to achieve success and leisure.
                </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel>
              <div className="mb-[10px] !border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg !border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary shadow-faq hover:bg-white focus:!ring-0">
                  Share revenue / Passive Income: How is it calculated ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  The distribution rate would be determined by the total number
                  of NFT holders, the total number of NFTs held by each owner,
                  and the rarity of the NFTs held by each owner.
                </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel>
              <div className="mb-[10px] !border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg !border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary shadow-faq hover:bg-white focus:!ring-0">
                  Share revenue / Passive Income: How often do holders received
                  incentives ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  Shareholders would receive incentives on daily basis, with the
                  distribution rate calculated once a week at 00:00 on Monday
                  (GMT+0) and applied for the following week.
                </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel>
              <div className="mb-[10px] !border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg !border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary shadow-faq hover:bg-white focus:!ring-0">
                  How to contact to or collaborate with NFTCloud ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  You can reach us by joining our Discord or send us a message
                  on our official social channels, such as our Facebook or
                  Twitter!
                </Accordion.Content>
              </div>
            </Accordion.Panel>

            <Accordion.Panel>
              <div className="!border-t-0">
                <Accordion.Title className="flex w-full justify-between rounded-lg !border-0 !bg-white py-4  px-6 font-secondary !font-semibold !text-primary shadow-faq hover:bg-white focus:!ring-0">
                  Have other questions ?
                </Accordion.Title>
                <Accordion.Content className="rounded-lg bg-[#ffffff66] py-4 px-6 font-secondary leading-[1.4] shadow-faq">
                  Follow us on Twitter and join our Discord, we are super active
                  both channels and will respond to your questions as soon as
                  possible.
                </Accordion.Content>
              </div>
            </Accordion.Panel>
          </Accordion>
        </div>
      </Container>
    </section>
  )
}

export default Faq
