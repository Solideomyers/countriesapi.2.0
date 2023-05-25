import { BsHouseDoor } from 'react-icons/bs'
import { Button } from '../../Button/Button'
import { Word } from './Word'
import { Description } from './Description'
import { HeroRight } from './HeroRight'

export const Hero = () => {
  return (
    <section className="min-h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* information */}
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-white text-5xl xl:text-7xl font-bold leading-[4.5rem]">
            Countries - Individual Project <Word />
          </h1>
          <Description />
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Button
              linked={'https://www.linkedin.com/in/franciscomyers/'}
              color={'white'}
              icon={'Contact me'}
              background={'transparent'}
              onClick={null}
              disabled={null}
              flex={null}
              styles={'full'}
              size={'xl'}
            />
            <Button
              linked={'/home'}
              disabled={null}
              onClick={null}
              flex={'flex items-center gap-4'}
              styles={
                'full hover:border-2 hover:border-white hover:bg-transparent'
              }
              background={null}
              size={'xl'}
              icon={
                <BsHouseDoor className=" bg-transparent text-xl rounded-full text-white p-1 box-content " />
              }
              text={"Let's start"}
              color={'primary'}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:col-span-3 xl:flex items-center justify-center relative p-8 flex-grow">
        <HeroRight />
      </div>
    </section>
  )
}
