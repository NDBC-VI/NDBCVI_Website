import React from 'react'
import heroImg from "../../../assets/pngs/hero-img.png";
import CommunityLifeCard from './CommunityLifeCard';
import { FadeInOnViewWrapper } from '@/app/shared/animation/FadeInOnViewWrapper';

type CommunityLifeActivityType =  {
    name: string,
    img: string
}
const communityLifeActivities: CommunityLifeActivityType[] = [
    {
        name: "Activity Name 1",
        img: heroImg.src,
    },
    {
        name: "Activity Name 2",
        img: heroImg.src,
    },
    {
        name: "Activity Name 3",
        img: heroImg.src,
    },
    {
        name: "Activity Name 4",
        img: heroImg.src,
    }
]
export const CommunityLifeCardsDisplay = () => {
    return (
        <div className="w-[85vw] md:w-[40vw] h-[70vh] shrink-0 lg:w-auto lg:flex-1 lg:group-hover:opacity-40 lg:hover:!opacity-100 peer-hover:!opacity-100 group/item">
            {
                communityLifeActivities.map((activity: CommunityLifeActivityType, i: number) => (
                    <FadeInOnViewWrapper animation_duration={1000} translationY={"25px"} translationX="0" delay={(500 * i).toString()}>
                        <CommunityLifeCard name={activity.name} img={activity.img} />
                    </FadeInOnViewWrapper>
                ))    
            }
        </div>
    )
}
