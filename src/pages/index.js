import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div className="bg-backgroundPrimary">
      <div className="container py-20 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5">
          <div className="flex flex-col justify-evenly">
            <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left text-primary">
              One Platform for all Students Needs
            </h2>

            <p className="mt-14 text-lg text-white">
              Nexster is a one-stop place to find solutions for the needs of
              university students. Our mission is to provide software solutions
              for students to make their lives easy and productive.
            </p>

            <a href="#">
              <div className="border-2 border-slate-500 hover:bg-primary text-white w-fit py-1 px-5 mt-10 self-center md:self-start font-semibold text-lg">
                Go To Nexster
              </div>
            </a>

            <div className="py-1 mt-10 sbg-black ">
              <p className="text-center text-lg text-slate-400 font-semibold bg-slate-700 py-1 px-4">
                Nexster is entirely FREE. Only for students at University of
                Moratuwa.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <StaticImage
              src="../images/home-img.png"
              alt="homepage image"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-backgroundSecondary">
      <div className="container py-20 max-w-[1400px]">
        <h2 className="text-primary font-bold text-4xl mx-5">
          Imagine a Place
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-10 mx-5">
          <div className="bg-backgroundPrimary">
            <StaticImage
              className="object-cover h-[300px]"
              src="../images/home-img.png"
              alt="homepage image"
            />
            <div className="mx-5">
              <h4 className="mt-5 text-xl font-semibold text-primary">
                Feature
              </h4>
              <p className="mt-2 text-slate-600">here goes the description.</p>

              <button className="border my-5 text-slate-400 py-2 px-5">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-backgroundPrimary">
            <StaticImage
              className="object-cover h-[300px]"
              src="../images/home-img.jpg"
              alt="homepage image"
            />
            <div className="mx-5">
              <h4 className="mt-5 text-xl font-semibold text-primary">
                Feature
              </h4>
              <p className="mt-2 text-slate-600">here goes the description.</p>

              <button className="border my-5 text-slate-400 py-2 px-5">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-backgroundPrimary">
            <StaticImage
              className="object-cover h-[300px]"
              src="../images/home-img.jpg"
              alt="homepage image"
            />
            <div className="mx-5">
              <h4 className="mt-5 text-xl font-semibold text-primary">
                Feature
              </h4>
              <p className="mt-2 text-slate-600">here goes the description.</p>

              <button className="border my-5 text-slate-400 py-2 px-5">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-backgroundPrimary">
            <StaticImage
              className="object-cover h-[300px]"
              src="../images/home-img.jpg"
              alt="homepage image"
            />
            <div className="mx-5">
              <h4 className="mt-5 text-xl font-semibold text-primary">
                Feature
              </h4>
              <p className="mt-2 text-slate-600">here goes the description.</p>

              <button className="border my-5 text-slate-400 py-2 px-5">
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className="w-full h-[300px] md:h-[400px] lg:h-[700px] mt-32 px-5">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/NQ4gLJYspdA?si=MgvWypbN1IoHf50q"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
