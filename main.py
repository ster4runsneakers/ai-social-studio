from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import openai
import os

app = FastAPI()

# CORS: Να δέχεται requests από το frontend σου
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Βάλε το domain σου για μεγαλύτερη ασφάλεια
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Πάρε το API key από τα Environment Variables του Render!
openai.api_key = os.getenv("OPENAI_API_KEY")

class PromptRequest(BaseModel):
    prompt: str
    lang: str = "en"

@app.post("/generate")
async def generate(data: PromptRequest):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": data.prompt}],
            max_tokens=100,
            temperature=0.7
        )
        result = response.choices[0].message.content.strip()
        return { "result": result }
    except Exception as e:
        return { "result": f"Error: {str(e)}" }
