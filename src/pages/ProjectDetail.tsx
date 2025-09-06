import React from 'react';

const ProjectDetail: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Project Title</h1>
            <div className="w-full max-w-2xl mb-8">
                <video className="w-full rounded-lg" controls>
                    <source src="path/to/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-2">Project Description</h2>
                <p className="text-gray-700">
                    Detailed information about the project goes here. Discuss the concept, the process, and the outcome.
                </p>
            </div>
        </div>
    );
};

export default ProjectDetail;