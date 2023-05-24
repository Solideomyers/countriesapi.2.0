import { RiPlayFill } from 'react-icons/ri'
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
          <h1 className="text-5xl xl:text-7xl font-bold leading-[4.5rem]">
            Countries - Individual Project <Word />
          </h1>
          <Description />
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Button
              linked={'https://www.linkedin.com/in/franciscomyers/'}
              color={'white'}
              icon={'Contact me'}
              background={'primary'}
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
              flex={'flex items-center gap-4 border-none hover:bg-opacity-90'}
              styles={'full'}
              background={'transparent'}
              size={'xl'}
              icon={
                <RiPlayFill className="bg-secondary rounded-full text-primary p-4 box-content" />
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
