import { Code, Code2, Lightbulb, Rocket } from "lucide-react";
import React from "react";

function Process() {
  return (
    <div className="bg-gray-50 p-3" id="process">
      <h1 className="text-3xl font-bold text-center mb-8">My Process</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Code2 className="text-center text-purple-400 w-12 h-12 bg-gray-200 p-2 rounded text-[16px]" />
          <h2 className="text-xl font-semibold mb-4">Strategy</h2>

          <p className="text-gray-700">
            Understanding your vision, goals, and target audience to create a
            solid foundation for development..
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Lightbulb className="text-center text-purple-400 w-12 h-12 bg-gray-200 p-2 rounded text-[16px]" />
          <h2 className="text-xl font-semibold mb-4">Development</h2>
          <p className="text-gray-700">
            Create wireframes and prototypes to visualize the user interface and
            user experience. This allows us to iterate on the design before
            development begins.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <Rocket className="text-center text-purple-400 w-12 h-12 bg-gray-200 p-2 rounded text-[16px]" />

          <h2 className="text-xl font-semibold mb-4"> Deployment</h2>
          <p className="text-gray-700">
            Ensuring smooth deployment with comprehensive testing, monitoring,
            and post-launch support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Process;
