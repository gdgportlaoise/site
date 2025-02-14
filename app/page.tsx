import Link from "next/link";
import Logo from "@/lib/assets/Logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Logo className="w-12 h-12" />
          <div className="leading-[1] ml-3 font-GoogleSansDisplayRegular">
            <span className="text-lg text-[#1e1e1e]">
              Google Developer Group
            </span>
            <br />
            <span className="text-md text-[#4285f4]">Portlaoise</span>
          </div>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 font-GoogleSansDisplayRegular">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#events">
            Events
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about">
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#join">
            Join
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-6">
            <div className="flex flex-col items-center space-y-4 text-center py-12 md:py-24 lg:py-32 xl:py-48">
              <div className="space-y-2">
                <h1 className="text-3xl font-GoogleSansDisplayBold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to GDG Portlaoise
                </h1>
                <p className="mx-auto max-w-[700px] font-GoogleSansDisplayRegular md:text-xl">
                  Your local chapter of the global Google Developer Group
                  network. We&apos;re dedicated to building a community to
                  connect developers & tech enthusiasts across the Midlands,
                  providing a dynamic space to learn, collaborate, and push
                  boundaries.
                </p>
              </div>
              <div className="space-x-4 font-GoogleSansDisplayRegular">
                <Button asChild>
                  <Link href="#join">Join Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#events">Upcoming Events</Link>
                </Button>
              </div>
            </div>
            <div className="w-full h-full min-h-56 bg-[url(/gdg-portlaoise-group-photo.jpg)] bg-cover bg-center"></div>
          </div>
        </section>
        <section
          id="events"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-GoogleSansDisplayBold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    Build With AI 2025
                  </CardTitle>
                  <CardDescription className="font-GoogleSansDisplayRegular">
                    Join us for Build With AI 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Feb 20 2025, 17:30 - 20:30</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>FRS Recruitment, The CUBE</span>
                  </div>
                  <Link
                    href="https://gdg.community.dev/events/details/google-gdg-portlaoise-presents-build-with-ai-2025/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Button className="w-full mt-4" variant="outline">
                      RSVP
                    </Button>
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    DevFest Ireland 2025
                  </CardTitle>
                  <CardDescription className="font-GoogleSansDisplayRegular">
                    Join us for Ireland&apos;s largest community-led developer
                    conference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Date TBC</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <MapPin className="w-4 h-4" />
                    <span>Midlands Park Hotel</span>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    RSVP coming soon
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-GoogleSansDisplayBold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              What We Do
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    Tech Talks
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular">
                  Regular presentations on the latest technologies and
                  development practices.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    Workshops
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular">
                  Hands-on sessions to learn new skills and technologies in a
                  collaborative environment.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    Hackathons
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular">
                  Exciting coding competitions to solve real-world problems and
                  showcase your skills.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    Skill development
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular">
                  Learn essential soft skills, including project management and
                  effective communication in tech environments.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="font-GoogleSansDisplayBold">
                    Networking events
                  </CardTitle>
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular">
                  Built relationships & get to know others in the local tech
                  community.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-GoogleSansDisplayBold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">
              Meet the Team
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Image
                    src="/jordan-harrison.jpeg"
                    alt="Jordan Harrison"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular text-center">
                  <CardTitle className="font-GoogleSansDisplayBold text-center mb-2">
                    Jordan Harrison
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Founder & Community Lead
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Mariana Alvez"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular text-center">
                  <CardTitle className="font-GoogleSansDisplayBold text-center mb-2">
                    Mariana Alvez
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Community Lead
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Padraigh Dermody"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular text-center">
                  <CardTitle className="font-GoogleSansDisplayBold text-center mb-2">
                    Padraigh Dermody
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Community Lead
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Darragh Drennan"
                    width={100}
                    height={100}
                    className="rounded-full mx-auto"
                  />
                </CardHeader>
                <CardContent className="font-GoogleSansDisplayRegular text-center">
                  <CardTitle className="font-GoogleSansDisplayBold text-center mb-2">
                    Darragh Drennan
                  </CardTitle>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Community Lead
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="join"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-GoogleSansDisplayBold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Community
                </h2>
                <p className="mx-auto font-GoogleSansDisplayRegular max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Be part of a vibrant community of developers, designers, and
                  tech enthusiasts.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 font-GoogleSansDisplayRegular">
                <Button className="w-full" asChild>
                  <a
                    href="https://gdg.community.dev/gdg-portlaoise/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Users className="mr-2 h-4 w-4" /> Join GDG Portlaoise
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t font-GoogleSansDisplayRegular">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2025 GDG Portlaoise. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://linkedin.com/company/gdgportlaoise">
            LinkedIn
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://instagram.com/gdgportlaoise">
            Instagram
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://tiktok.com/gdgportlaoise">
            TikTok
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://github.com/gdgportlaoise">
            GitHub
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4"
            href="https://discord.gg/X5py5jeF4A">
            Discord
          </Link>
        </nav>
      </footer>
    </div>
  );
}
