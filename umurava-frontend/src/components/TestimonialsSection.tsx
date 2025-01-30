import Image from 'next/image';

const TestimonialsSection = () => {
  return (
    <section className="my-8 text-center bg-background">
      <h2 className="text-2xl font-bold text-secondary mb-4">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded bg-white">
          <Image src="/images/user1.jpg" alt="User 1" width={150} height={150} className="rounded-full mx-auto mb-4" />
          <p className="text-accent">&quot;Testimonial 1.&quot;</p>
          <h3 className="text-xl font-bold text-secondary mt-2">User 1</h3>
        </div>
        <div className="p-4 border rounded bg-white">
          <Image src="/images/user2.jpg" alt="User 2" width={150} height={150} className="rounded-full mx-auto mb-4" />
          <p className="text-accent">&quot;Testimonial 2.&quot;</p>
          <h3 className="text-xl font-bold text-secondary mt-2">User 2</h3>
        </div>
        <div className="p-4 border rounded bg-white">
          <Image src="/images/user3.jpg" alt="User 3" width={150} height={150} className="rounded-full mx-auto mb-4" />
          <p className="text-accent">&quot;Testimonial 3.&quot;</p>
          <h3 className="text-xl font-bold text-secondary mt-2">User 3</h3>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
