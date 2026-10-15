import { useState } from 'react'
import stamp from './assets/Stamp.png'
import envelopeTop from './assets/envelope top.png'
import envelopeDown from './assets/envelope down.png'
import envelopeFull from './assets/envelope(full).png'
import './Landing.css'

export default function Landing({ onOpen }) {
	const [isOpening, setIsOpening] = useState(false)

	const openEnvelope = () => {
		if (isOpening) return
		setIsOpening(true)
		const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 220
		window.setTimeout(onOpen, delay)
	}

	return (
		<section className="landing-cover" aria-label="Portfolio letter">
			<div className="landing-frame" aria-hidden="true" />
			<div className="landing-envelope-scene">
				<div className={`landing-envelope ${isOpening ? 'is-opening' : ''}`}>
					<img className="envelope-piece envelope-piece-full" src={envelopeFull} alt="" />
					<img className="envelope-piece envelope-piece-down" src={envelopeDown} alt="" />
					<img className="envelope-piece envelope-piece-top" src={envelopeTop} alt="" />
					<button type="button" className="envelope-seal" onClick={openEnvelope} disabled={isOpening} aria-label="Open Isabelle’s portfolio">
						<img src={stamp} alt="" />
					</button>
				</div>
			</div>
			<header className="landing-header">
				<span>PERSONAL CORRESPONDENCE</span>
				<span>PORTFOLIO · 2026</span>
			</header>

			<div className="landing-center">
				<p className="landing-eyebrow">A LETTER OF WORK & CURIOSITY</p>
				<p className="landing-hint">Press the seal to enter</p>
			</div>

		</section>
	)
}
