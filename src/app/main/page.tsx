/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import React, { useEffect } from 'react'
import { useState, useRef } from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalculateIcon from '@mui/icons-material/Calculate';
import SendIcon from '@mui/icons-material/Send';
import { Slide, Zoom, toast } from 'react-toastify';
const currentRunArray: any[] = []
const main = () => {
	const [tab, setTab] = useState('Generate')
	const [deviation, setDeviation] = useState('25')
	const [randomNumber, setRandomNumber] = useState("↓")
	const [run, setRun] = useState(0)
	const [displayTarget, setDisplayTarget] = useState(0)
	const [wicket, setWicket] = useState(0)
	const [innings, setInnings] = useState(1)
	const [target, setTarget] = useState(0)
	const [reqRuns, setReqRuns] = useState("-")
	const [resultModal, setResultModal] = useState(false)
	const [bowler, setBowler] = useState("")
	const princeArray = ["Don't you ever dare to repeat '3',", "Prince's grip is tight as a virgin pussy!", "Bro you got this, smash Prince with your peculiar guess ✨."]
	const anistoArray = ["🐄🔊 Moooooooo !","You are gonna nail it, get ready to pack his ass up ✨","'Asking a cow to dance is not wise'🕺"]
	function getRandomNumber() {
		const randomNumber = Math.floor(Math.random() * 7)
		setRandomNumber(randomNumber.toString())
	}
	useEffect(() => {
		if (parseInt(reqRuns) < 0) {
			setReqRuns("0")
		}
		if (innings == 2) {
			if (run >= displayTarget) {
				setResultModal(true)
				setRun(0)
				currentRunArray.length = 0
				setDisplayTarget(0)
				setInnings(1)
			}
		}
	}, [run])
	function counter(x: any) {
		const currentRun = x
		setRun(run + currentRun)
		const tempTarget = target - currentRun
		setTarget(tempTarget)
		if (innings == 2) {
			setReqRuns(tempTarget.toString())
		}
		currentRunArray.push(<div className={`${currentRun == 6 ? 'bg-[#6420AA]' : 'bg-[#38E54D]'} w-[30px] h-[30px] rounded-full flex flex-col justify-center items-center flex-shrink-0 mr-2 ${currentRun == 4 ? 'bg-[#6420AA]' : 'bg-[#38E54D]'}`}>
			<h1 className='text-white font-semibold mt-[2px]'>{currentRun}</h1>
		</div>)
		scrollContainerToRight()
	}
	function highlightWicket() {
		currentRunArray.push(<div className={`w-[30px] h-[30px] bg-[#EC364F] rounded-full flex flex-col justify-center items-center flex-shrink-0 mr-2`}>
			<h1 className='text-white text-[25px] font-semibold mt-[2px]'>w</h1>
		</div>)
		scrollContainerToRight()
	}
	const parentRef = useRef<HTMLDivElement>(null);

	function scrollContainerToRight() {
		if (parentRef.current) {
			parentRef.current.scrollLeft += 150;
		}
	}
	function roastBowler(name: String) {
		let description = ""
		const randIndex = Math.floor(Math.random() * 3)
		if (name.toLowerCase() == "prince") {
			description = princeArray[randIndex]
		}
		if (name.toLowerCase() == "anisto") {
			description = anistoArray[randIndex]
		}
		else if (name == "") {
			description = "Nigga, type something!"
		}
		else {
			description = name + "?, who the fuck is that?"
		}
		toast(description, {
			position: "top-center",
			style: { width: "320px", borderRadius: "20px", marginTop: "15px", backgroundColor: "#EC364F", fontFamily: "Josefin Sans", textAlign: "center", fontWeight: "bold", justifyItems: "center" },
			autoClose: 4000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: "dark",
			transition: Slide,
		});
	}
	return (
		<div className='bg-black h-screen w-screen md:min-h-screen sm:inset-0 sm:fixed sm:overflow-hidden flex flex-col font-josefin relative'>
			<div className='relative flex flex-row w-screen justify-center items-center mt-[20px] font-semibold'>
				<div className={`${tab == 'Generate' ? "bg-[#EC364F]" : "bg-transparent"} w-[160px] h-[50px] rounded-l-full flex flex-row justify-center items-center border-solid border-[2px] border-[#EC364F] border-r-[1px] transition-all duration-500`} onClick={() => {
					setTab('Generate')
				}}>
					<AutoAwesomeIcon className='text-white mr-[5px]' />
					<h1 className='text-[20px] text-white pt-[4px]'>Generate</h1>
				</div>
				<div className={`${tab == 'Counter' ? "bg-[#EC364F]" : "bg-transparent"} w-[160px] h-[50px] rounded-r-full flex flex-row justify-center items-center border-solid border-[2px] border-[#EC364F] transition-all border-r-[1px]`} onClick={() => {
					setTab('Counter')
				}}>
					<CalculateIcon className='text-white mr-[5px]' />
					<h1 className='text-[20px] text-white pt-[4px]'>Count</h1>
				</div>
			</div>
			{tab == "Generate" ? (
				<><div className='flex flex-col justify-center items-center relative mt-[20px] slide-out-content'>
					<div className='text-[200px] font-semibold -mt-[10px] mb-[20px]'>
						<h1 className={`text-white`}>{randomNumber}</h1>
					</div>
					<div className='py-[10px] px-[30px] bg-[#EC364F] rounded-l-full rounded-r-full absolute bottom-[10px] flex flex-row' onClick={getRandomNumber}>
						<AutoAwesomeIcon className='text-white mr-[5px] mt-[8px]' />
						<h1 className='text-white text-[25px] mt-[4px]'>Generate</h1>
					</div>
				</div>
					<div className='mt-[50px] slide-out-content'>
						<div className='flex flex-col relative'>
							<h1 className='text-white font-bold text-[23px] absolute left-[1.8rem] -top-[1rem]'>Deviation:</h1>
						</div>
						<div className='relative flex flex-row w-screen justify-center items-center mt-[30px] font-semibold'>
							<div className={`${deviation == "25" ? "bg-[#EC364F]" : "bg-transparent"} h-[50px] w-[100px] flex flex-col justify-center items-center rounded-l-full border-solid border-[2px] border-[#EC364F] transition-all duration-700`} onClick={() => {
								setDeviation('25');
							}}>
								<h1 className='text-white text-[20px] mt-[3px]'>25%</h1>
							</div>
							<div className={`${deviation == "50" ? "bg-[#EC364F]" : "bg-transparent"} h-[50px] w-[100px] bg-[#EC364F] flex flex-col justify-center items-center border-solid border-[2px] border-x-0 border-[#EC364F] transition-all duration-700`} onClick={() => {
								setDeviation('50');
							}}>
								<h1 className='text-white text-[20px] mt-[3px]'>50%</h1>
							</div>
							<div className={`${deviation == "75" ? "bg-[#EC364F]" : "bg-transparent"} h-[50px] w-[100px] bg-[#EC364F] flex flex-col justify-center items-center rounded-r-full border-solid border-[2px] border-[#EC364F] transition-all duration-700`} onClick={() => {
								setDeviation('75');
							}}>
								<h1 className='text-white text-[20px] mt-[3px]'>75%</h1>
							</div>
						</div>
					</div>
					<div className='flex flex-row justify-center items-center mt-[30px] relative slide-out-content'>
						<input type="text" className='w-[230px] border-solid border-[2px] border-[#EC364F] rounded-l-full rounded-r-full py-[12px] bg-transparent text-white text-[16px] font-semibold focus:outline-none px-[15px] z-10'
							value={bowler}
							onChange={(e) => {
								setBowler(e.target.value);
							}} />
						{bowler == "" ? <h1 className='text-[15px] text-gray-500 absolute left-[14%] mt-[5px] z-0'>Who is the Bowler?</h1> : null}
						<div className='w-[50px] h-[50px] bg-[#EC364F] rounded-full ml-[13px] flex flex-col justify-center items-center'>
							<SendIcon className='text-white' onClick={() => {
								roastBowler(bowler);
							}} />
						</div>
					</div></>) : (<>
						<div className='flex flex-row justify-center items-center gap-[10px] mt-[30px] slide-in-content'>
							<div className='w-[100px] h-[80px] bg-[#EC364F] rounded-2xl flex flex-col justify-center items-center'>
								<h1 className='text-[16px] font-semibold text-white mt-[10px]'>Runs</h1>
								<hr className='w-[60px] border-none h-[1px] bg-white' />
								<h1 className='text-white font-semibold text-[30px]'>{run}</h1>
							</div>
							<div className='w-[100px] h-[80px] bg-[#EC364F] rounded-2xl flex flex-col justify-center items-center'>
								<h1 className='text-[16px] font-semibold text-white mt-[10px]'>Wicket(s)</h1>
								<hr className='w-[60px] border-none h-[1px] bg-white' />
								<h1 className='text-white font-semibold text-[30px]'>{wicket}</h1>
							</div>
							<div className='w-[100px] h-[80px] bg-[#EC364F] rounded-2xl flex flex-col justify-center items-center'>
								<h1 className='text-[16px] font-semibold text-white mt-[10px]'>Innings</h1>
								<hr className='w-[60px] border-none h-[1px] bg-white' />
								<h1 className='text-white font-semibold text-[30px]'>{innings}</h1>
							</div>
						</div>
						<div className='flex flex-row justify-center items-center mt-[20px] gap-[15px] slide-in-content'>
							<div className='w-[150px] h-[80px] bg-[#EC364F] rounded-2xl flex flex-col justify-center items-center'>
								<h1 className='text-[16px] font-semibold text-white mt-[10px]'>Target</h1>
								<hr className='w-[60px] border-none h-[1px] bg-white' />
								<h1 className='text-white font-semibold text-[30px]'>{displayTarget}</h1>
							</div>
							<div className='w-[150px] h-[80px] bg-[#EC364F] rounded-2xl flex flex-col justify-center items-center'>
								<h1 className='text-[16px] font-semibold text-white mt-[10px]'>Req Runs</h1>
								<hr className='w-[60px] border-none h-[1px] bg-white' />
								<h1 className='text-white font-semibold text-[30px]'>{reqRuns}</h1>
							</div>
						</div>
						<div className='flex flex-col justify-center items-center mt-[10px] slide-in-content'>
							<div ref={parentRef} className='w-[315px] h-[60px] border-solid border-[2px] border-[#EC364F] rounded-l-full rounded-r-full mt-[20px] flex flex-row items-center px-[10px] overflow-x-auto whitespace-nowrap'>
								{currentRunArray}
							</div>
						</div>
						<div className='flex flex-col justify-center items-center mt-[30px] slide-in-content'>
							<div className='grid grid-cols-3 text-white gap-x-[30px] gap-y-[25px]'>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => {
									counter(0)
								}}>
									<h1 className='text-white text-[30px] mt-[5px]'>0</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => {
									counter(1)

								}}>
									<h1 className='text-white text-[30px] mt-[5px]'>1</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => {
									counter(2)

								}}>
									<h1 className='text-white text-[30px] mt-[5px]'>2</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => {
									counter(3)

								}}>
									<h1 className='text-white text-[30px] mt-[5px]'>3</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => { counter(4) }}>
									<h1 className='text-white text-[30px] mt-[5px]'>4</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => { counter(5) }}>
									<h1 className='text-white text-[30px] mt-[5px]'>5</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => {
									setWicket(wicket + 1)
									highlightWicket()
								}}>
									<h1 className='text-white text-[20px] mt-[5px]'>W</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => { counter(6) }}>
									<h1 className='text-white text-[30px] mt-[5px]'>6</h1>
								</div>
								<div className='w-[60px] h-[60px] rounded-full flex flex-col justify-center items-center border-solid border-[2px] border-[#EC364F]' onClick={() => {
									if (innings == 1) {
										setInnings(innings + 1)
										setTarget(run + 1)
										setDisplayTarget(run + 1)
										currentRunArray.length = 0
										setRun(0)
										setWicket(0)
									}
									if (innings == 2) {
										setResultModal(true)
										setRun(0)
										currentRunArray.length = 0
										setDisplayTarget(0)
										setReqRuns("-")
										setInnings(1)
									}
								}}>
									<h1 className='text-white text-[20px] mt-[5px]'>AO</h1>
								</div>
							</div>
						</div>
					</>)}
			<div className='flex flex-row justify-center items-center mt-[50px]'>
				<h1 className='text-[10px] text-gray-500 font-semibold mr-[5px]'>Owned by Adrin Sanchez.</h1>
				<h1 className='text-[10px] text-gray-500 font-semibold'>Copyright © 2024</h1>
			</div>
			{resultModal ? (<div className='w-screen h-screen flex flex-col justify-center items-center absolute -top-[70px] backdrop-blur backdrop-filter backdrop-blur-lg fade-in-modal'>
				<div className='w-[300px] h-[200px] border-solid border-[2px] border-[#EC364F] rounded-3xl bg-black flex flex-col justify-center items-center'>
					<h1 className='text-[30px] text-white font-semibold'>GAME OVER</h1>
					<div className='bg-[#EC364F] rounded-l-full rounded-r-full px-[12px] py-[7px] mt-[20px]' onClick={() => {
						setResultModal(false)
					}}>
						<h1 className='text-white text-[20px] font-semibold'>Continue</h1>
					</div>
				</div>
			</div>) : null}
		</div>
	)
}

export default main