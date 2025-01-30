// Place this at the top of the file
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="text-center p-8 bg-background">
      <h1 className="text-4xl font-bold text-secondary mb-4">Build Work Experience through Skills Challenges Program</h1>
      <p className="text-accent mb-4">Experience a New Way of Building Work Experience</p>
      <div className="w-full max-w-lg mx-auto">
        <Image src="/images/1.png" alt="Hero Image" width={600} height={400} className="rounded" />
      </div>
      <button className="bg-primary text-white px-6 py-3 rounded mt-4">Get Started</button>
    </div>
  );
};

export default HeroSection;
