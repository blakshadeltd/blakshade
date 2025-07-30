'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimateTextOnScroll({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const elements = containerRef.current?.querySelectorAll('h2, h3, p, span')

        elements?.forEach((el) => {
            const elNode = el as HTMLElement
            if (elNode.dataset.animated === 'true') return
            elNode.dataset.animated = 'true'

            const childNodes = Array.from(el.childNodes)
            childNodes.forEach((node) => {
                if (node.nodeType === Node.TEXT_NODE) {
                    const text = node.textContent || ''
                    const words = text.trim().split(/\s+/)
                    const fragment = document.createDocumentFragment()

                    words.forEach((word) => {
                        const wordSpan = document.createElement('span')
                        wordSpan.style.display = 'inline-block'
                        wordSpan.style.overflow = 'hidden'
                        wordSpan.style.marginRight = '0.25em'

                        const innerSpan = document.createElement('span')
                        innerSpan.textContent = word
                        innerSpan.style.display = 'inline-block'
                        innerSpan.style.transform = 'translateY(100%)'

                        wordSpan.appendChild(innerSpan)
                        fragment.appendChild(wordSpan)
                    })

                    el.insertBefore(fragment, node)
                    el.removeChild(node)

                    ScrollTrigger.create({
                        trigger: el,
                        start: 'top 85%',
                        onEnter: () => {
                            const innerSpans = el.querySelectorAll('span > span')
                            gsap.to(innerSpans, {
                                y: 0,
                                duration: 1,
                                stagger: 0.05,
                                ease: 'power4.out',
                            })
                        },
                        once: true,
                    })
                }
            })
        })

        // Animate build-section slide-ins
        const slides = containerRef.current?.querySelectorAll('.build-section')
        slides?.forEach((slide) => {
            gsap.from(slide, {
                x: -100,
                opacity: 0,
                duration: 1.3,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: slide,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
            })
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [])

    return <div ref={containerRef}>{children}</div>
}
