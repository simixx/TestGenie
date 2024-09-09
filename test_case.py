import re

def format_test_cases(llm_output):
    # Split the output into individual test cases
    test_cases = re.split(r'\n(?=Test Case)', llm_output)
    
    formatted_cases = []
    for case in test_cases:
        # Extract sections using regex
        description = re.search(r'Description:(.*?)(?=Pre-conditions:|$)', case, re.DOTALL)
        preconditions = re.search(r'Pre-conditions:(.*?)(?=Testing Steps:|$)', case, re.DOTALL)
        steps = re.search(r'Testing Steps:(.*?)(?=Expected Result:|$)', case, re.DOTALL)
        expected = re.search(r'Expected Result:(.*?)(?=$)', case, re.DOTALL)
        
        # Format the extracted sections
        formatted_case = {
            "description": description.group(1).strip() if description else "",
            "preconditions": preconditions.group(1).strip() if preconditions else "",
            "steps": steps.group(1).strip().split('\n') if steps else [],
            "expected_result": expected.group(1).strip() if expected else ""
        }
        
        formatted_cases.append(formatted_case)
    
    return formatted_cases