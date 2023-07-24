import { NextFunction, Request, Response } from "express"

const validateFileExtension = (name: string): boolean => {
  const ext = name.split('.')[1];
  return ext !== 'txt';
}

const validateFile = (req: Request, res: Response, next: NextFunction) => {
  if(!req.file) {
    return res.status(500).json({ error: 'File is required'})
  }

  if(validateFileExtension(req.file?.originalname)) {
    return res.status(500).json({ error: 'File is not .txt'})
  }

  next()
}

export { validateFile }