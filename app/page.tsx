export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-400">
        🐳 Experiment 9 — Docker
      </h1>

      {/* What is Docker */}
      <section className="mb-8 bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
          What is Docker?
        </h2>
        <p className="text-gray-300">
          Docker is a platform that packages your application and all its
          dependencies into a <span className="text-blue-400 font-semibold">container</span> — a
          lightweight, portable unit that runs consistently across any environment.
        </p>
      </section>

      {/* Key Concepts */}
      <section className="mb-8 bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-green-400 mb-4">
          🔑 Key Concepts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-blue-400 font-semibold mb-2">📦 Image</h3>
            <p className="text-gray-400 text-sm">A read-only template with instructions to create a container. Like a blueprint.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-green-400 font-semibold mb-2">🚀 Container</h3>
            <p className="text-gray-400 text-sm">A running instance of an image. Isolated, lightweight, and portable.</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-4">
            <h3 className="text-yellow-400 font-semibold mb-2">📄 Dockerfile</h3>
            <p className="text-gray-400 text-sm">A text file with instructions to build a Docker image step by step.</p>
          </div>
        </div>
      </section>

      {/* Dockerfile Example */}
      <section className="mb-8 bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          📄 Sample Dockerfile
        </h2>
        <pre className="bg-gray-900 rounded-lg p-4 text-sm text-green-400 overflow-x-auto">
{`FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]`}
        </pre>
      </section>

      {/* Common Commands */}
      <section className="mb-8 bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-orange-400 mb-4">
          💻 Common Docker Commands
        </h2>
        <div className="space-y-3">
          {[
            { cmd: "docker build -t myapp .", desc: "Build an image from Dockerfile" },
            { cmd: "docker run -p 3000:3000 myapp", desc: "Run a container from image" },
            { cmd: "docker ps", desc: "List all running containers" },
            { cmd: "docker stop <id>", desc: "Stop a running container" },
            { cmd: "docker images", desc: "List all images" },
            { cmd: "docker-compose up", desc: "Start all services in docker-compose.yml" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 bg-gray-900 rounded-lg p-3">
              <code className="text-green-400 font-mono text-sm min-w-64">{item.cmd}</code>
              <span className="text-gray-400 text-sm">— {item.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Docker */}
      <section className="bg-gray-800 rounded-xl p-6">
        <h2 className="text-2xl font-semibold text-purple-400 mb-3">
          ✅ Why Use Docker?
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li>✔ Works on any machine — no more "it works on my machine"</li>
          <li>✔ Isolates dependencies for each project</li>
          <li>✔ Easy to scale and deploy to cloud</li>
          <li>✔ Fast startup compared to virtual machines</li>
        </ul>
      </section>
    </main>
  );
}