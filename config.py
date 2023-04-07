from urllib import parse

TOKEN = "MTA5Mzg0MzEwMzQxMDAzMjY3Mg.GuGhz-.DABLSOLGPe0IjDI_LRw4AO-HaqAX3uUOfF84Nw"
CLIENT_SECRET = "-HXbuHmerOUb8dOsb0GHcy8bAxPIqPKg-"
REDIRECT_URI = "http://127.0.0.1:5000/oauth/callback"
OAUTH_URL = f"https://discord.com/api/oauth2/authorize?client_id=1093843103410032672&redirect_uri={parse.quote(REDIRECT_URI)}&response_type=code&scope=identify"
