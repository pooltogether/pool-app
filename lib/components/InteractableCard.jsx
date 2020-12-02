import React from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { motion } from 'framer-motion'

export const InteractableCard = (
  props,
) => {  
  const selected = props.selected
  const className = props.className

  return <>
    <motion.li
      onClick={props.onClick}

      whileHover={{
        y: selected ? 0 : -2
      }}
      whileTap={{ y: 1, scale: 0.98 }}
      className={classnames(
        className,
        'interactable-card bg-card hover:bg-card-selected border-card w-full px-4 sm:px-10 mb-4 py-5 sm:py-8 trans rounded-lg text-inverse hover:text-inverse',
        {
          'hover:shadow-xl cursor-pointer': !selected,
          'selected': selected,
        }
      )}
      style={{
        minHeight: 120
      }}
      // animate={{
      //   scale: 1,
      //   // y: 0,
      //   opacity: 1,
      //   transition: {
      //     duration: 0.2,
      //     staggerChildren: 0.5,
      //     delayChildren: 0.2
      //   }
      // }}
      // exit={{
      //   scale: 0,
      //   // y: -10,
      //   opacity: 0,
      //   transition: { staggerChildren: 0.05, staggerDirection: -1 }
      // }}
    >
      <Link
        href={props.href}
        as={props.as}
      >
        <a>
          {props.children}
        </a>
      </Link>
    </motion.li>
  </>
}
