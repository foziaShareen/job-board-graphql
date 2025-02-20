import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getCompany } from '../graphql/queries';

function CompanyPage() {
  const { companyId } = useParams();
  const[company, setCompany]= useState()
  useEffect(() => {
    getCompany(companyId).then(setCompany)
  },[companyId])  
  console.log('company is',company)
  
  if(!company) return <div>Loading...</div>

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );

  // const company = companies.find((company) => company.id === companyId);
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );
}

export default CompanyPage;
