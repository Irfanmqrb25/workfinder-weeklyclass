interface BodyJobDetailProps {
  description: string;
}

const BodyJobDetail = ({ description }: BodyJobDetailProps & {}) => {
  return (
    <div className="space-y-5">
      <h2 className="font-bold text-2xl">Job Description</h2>
      <p>{description}</p>
    </div>
  );
};

export default BodyJobDetail;
