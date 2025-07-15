import "@/app/globals.css";
import { SanityDocument } from 'next-sanity'
import React from 'react'
import ReusableCardComponent from '@/app/shared/components/ReusableCardComponent'
import { urlFor } from '@/sanity/lib/image'


export const PeopleList = ({list}: {list: SanityDocument[], duration?: string, direction?: string}) => {

    const defaultImg = "https://s3-alpha-sig.figma.com/img/c399/a4aa/cbd312b546258322b4fb6eadc0c8c032?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mt8A9Nqq0f-4V2j6Tz9krgCo3aTWKRBrlu8NGdcwF4HXKYaSfzkITpDQKeGwu-JAn7~pGxmVNUEOWH8BqMZl5BbQE245uspjtN2cMqrj10Q3K2o9Zl-ZTgy5zUzwM0kTVBpueJHmhZPCr2ZiFkX5vNNeIfxdnlIbPvlfVlxWSOd45JiOjcN3dFYbVq-HfL5~nuOB~UnsWLhY1JE1bXk34-wLqXTkT9amR4kCS3hWMOJ44T84YKNnEOOEhjQ~WQbDv~hxUB6LzC4EOIipepj4mNbvu62-spfZDPOENNaTAly7hZ0TZTNSaR6Gy3Tk44UMhtyvJ5wRj5EPLNfw25Jwdg__";
    
    const duplicatedList = [...list, ...list];

    return (
            <>
                {duplicatedList.map((person, i) => (
                    <div key={person.slug ? `${i}-person.slug.current` : `${i}-${person._type}/${person.name}`} aria-hidden={i>=list.length ? "true" : "false"}
                        className={`m-1 cursor-pointer w-[25%] shrink-0 lg:transition-all lg:ease-out lg:duration-500 rounded-lg`}>
                        <ReusableCardComponent 
                            imgUrl={person.photo ? urlFor(person.photo.asset._ref).url() : defaultImg} 
                            title={person.name} 
                            body={person.bio[0].children[0].text} 
                            rounded="[24px]"
                        />
                    </div>
                    ))}
            </>
    )
}